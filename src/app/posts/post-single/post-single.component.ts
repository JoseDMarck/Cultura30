import { Component, OnInit, ElementRef } from '@angular/core';
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
 repoUrlWA: any;
 reloadState: any;
 
 constructor(private postsService: PostsService, private route: ActivatedRoute, private sanitizer: DomSanitizer, elm: ElementRef) { 
      
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
        this.repoUrl = 'https://revolucion.news/'+this.slugArray;
        this.repoUrlWA = 'whatsapp://send?text='+this.repoUrl;
      });
  }




  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
       this.getPost(slug)
    });

    window.scrollTo(0, 0);

  }


  getBackground(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }

  sanitize(url:string){
      return this.sanitizer.bypassSecurityTrustUrl(url);
   }

}
