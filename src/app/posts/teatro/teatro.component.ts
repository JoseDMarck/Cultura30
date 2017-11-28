import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate,transition } from '@angular/animations'

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
   animations: [
    trigger('fadeInAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('800ms ease-in'))
    ])
  ],
  providers: [PostsService]
})
export class TeatroComponent implements OnInit {

  show = false;
  posts: Post[];

  categorias: Post[];
  post_count:number;
  categoriasCount:any;
  arregloCountCat:any;
  loadMoreVisible : boolean;
  selectedClass: number;

  exist_posts : boolean;
  exist_posts_1 : boolean;



  constructor(private postsService: PostsService, private router: Router) { 
    this.post_count = 20;
    this.arregloCountCat = [];
    this.loadMoreVisible = false
  }

  GetPosts_teatro(){
    this.postsService
      .getPosts_teatro()
      .subscribe(res => {
        this.posts = res;

        if (this.posts.length > 12){  this.exist_posts = true; }
        else { this.exist_posts = false }

         // Para detectar que exista más de 1 post
        if (this.posts.length < 1 ){  this.exist_posts_1 = true; }
        else { this.exist_posts_1 = false }


      });
  }


    //ANIMACION TOGGLE
    get stateName() {
        return this.show ? 'show' : 'hide'
     }

    toggle() {
        this.show = !this.show;
    }


  ngAfterViewInit() {
   
   console.log("estoy  en ngAfterViewInit")
   setTimeout(() => { 
     this.toggle()
   }, 300); // Or however long you need the delay to be
  

  }

   ngOnDestroy() {
     console.log("Destroy*******")

  }



  // CATEGORIAS COUNT SERVICE
  getCategoryCountTeatro(){
     this.postsService
      .GetCategoryCountTeatro()
      .subscribe(res => {
        this.categorias = res;
        this.arregloCountCat = this.categorias;
      });
  }

  //LOAD MORE POST
 LoadMorePosts(id_cat, numero){
   
   console.log("numero load more "+ numero)
    this.postsService
      .LoadMorePostsServiceNormal(id_cat,numero)
      .subscribe(res => {
        this.posts = res;
         console.log(this.arregloCountCat.count);

     

           

         if(this.post_count > this.arregloCountCat.count    ) {  
           console.log("es mayor");
           this.loadMoreVisible = true;
    }
    this.post_count = this.post_count + 20;
    console.log(id_cat,numero)


      });
 }


  ngOnInit() {
  	this.GetPosts_teatro();
    this.getCategoryCountTeatro();
  }


 selectPost(slug) {
	 this.router.navigate(["publicaciones/"+slug]);
   //this.router.navigate([slug]);
    console.log("Slug normal", slug)
}

}

