import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RutesService } from '../../services/rutes.service';

@Component({
  selector: 'app-posts-category-lists',
  templateUrl: './posts-category-lists.component.html',
  styleUrls: ['./posts-category-lists.component.css']
})
export class PostsCategoryListsComponent implements OnInit {


  category_name: any;
  post = [];


  constructor(private route: ActivatedRoute, private routesService: RutesService) { }


  loadPostByCategory(){
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      let categoryID =  params['id'];
      console.log("slug--> ", slug);
      console.log("categoryID--> ", categoryID);

      this.routesService.getPostsbyCategoryID(categoryID).subscribe(res => {
        console.log("res -->", res);
        for (var i = 0; i < res.length; i++) {
          this.post.push({
             
          })
        }
      });

   });
  

   window.scrollTo(0, 0);
  }

  ngOnInit() {

    this.loadPostByCategory();
  }

}
