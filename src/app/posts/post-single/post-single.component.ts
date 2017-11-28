import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: [PostsService]
})

export class PostSingleComponent implements OnInit {

	post: Post;
  imageUrl:string;
 slugArray: any;
 TweetTitulo: any;
 repoUrl:any;
 
 constructor(private postsService: PostsService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { 
      
  }


  getPost(slug){
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
        this.repoUrl = 'http://michoacantrespuntocero.com/cultura30/posts-redes/'+this.slugArray;
   
      });
  }


  ngOnInit() {
  
  	this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
       this.getPost(slug)
    });

  }

}
