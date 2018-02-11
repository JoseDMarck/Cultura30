import { Component, OnInit, Input, ElementRef} from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate,transition } from '@angular/animations';
import { MetaService } from '@ngx-meta/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css'],

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
export class OpinionComponent implements OnInit {

  show = false;
  posts: Post[];
  
  master = 'Master';

   
  categorias: Post[];
  post_count:number;
  categoriasCount:any;
  arregloCountCat:any;
  loadMoreVisible : boolean;
  hasCartelera : boolean;
  selectedClass: number;
  exist_posts : boolean;
  exist_posts_1 : boolean;




  constructor( private postsService: PostsService, private router: Router,  private readonly meta: MetaService, private sanitizer: DomSanitizer, elm: ElementRef) {

    this.post_count = 20;
    this.arregloCountCat = [];
    this.loadMoreVisible = false

    
}


  getPosts_opinion(){
    this.postsService
      .getPosts_opinion()
      .subscribe(res => {
        this.posts = res;
        console.log("asdasdssdas", this.posts)

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

  // CATEGORIAS COUNT SERVICE
   getCategoryCountOpinion(){
     this.postsService
      .GetCategoryCountOpinion()
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
  	this.getPosts_opinion();
    this.getCategoryCountOpinion();

    /*this.meta.setTitle('Musica 3.0');
    this.meta.setTag('og:url', 'http://michoacantrespuntocero.com/cultura30/publicaciones-musica');
    this.meta.setTag('og:type', 'article');
    this.meta.setTag('og:title', 'Articulos de Música 3.0');
    this.meta.setTag('og:description', 'Cultura 3.0 es un suplemento digital de Revolción 3.0');
    this.meta.setTag('og:image', 'http://culturatrespuntocero.com/images/generales/logo.png');*/


  }


 selectPost(slug) {
    this.router.navigate([slug]);
    //this.router.navigate([slug]);
    console.log("Slug normal", slug)
}

  getBackground(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }


}
