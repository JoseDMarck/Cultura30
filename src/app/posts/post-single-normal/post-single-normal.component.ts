import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MetaService } from '@ngx-meta/core';






@Component({
  selector: 'app-post-single-normal',
  templateUrl: './post-single-normal.component.html',
  styleUrls: ['./post-single-normal.component.css'],
  providers: [PostsService]
   
   
})

export class PostSingleNormalComponent implements OnInit {
 post: Post;
 imageUrl:string;
 slugArray: any;
 TweetTitulo: any;
 repoUrl:any;


 constructor(private postsService: PostsService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { 



  }


 getPost(slug){

console.log("Slug XXXX", slug)
    this.postsService
      .getPost(slug)
      .subscribe(res => {
        this.post = res[0];
        console.log("Post", this.post)
         this.slugArray = res[0].slug
         this.TweetTitulo = res[0].title.rendered
        console.log("Post", this.post)
        console.log("SlugArray", this.slugArray )
        console.log("TweetTitulo", this.TweetTitulo )
        this.repoUrl = 'https://revolucion.newsposts-redes/'+this.slugArray;


      });
  }


  ngOnInit() {
   
  	this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
       this.getPost(slug);

       console.log("Slug YYYYY", slug)
    });




  

     

 
     

  }







}
