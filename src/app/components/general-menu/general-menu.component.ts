import { Component, OnInit } from '@angular/core';
import { RutesService } from '../../services/rutes.service';
import { Router } from '@angular/router';
import {PostsCategoryListsComponent } from '../../pages/posts-category-lists/posts-category-lists.component';


@Component({
  selector: 'app-general-menu',
  templateUrl: './general-menu.component.html',
  styleUrls: ['./general-menu.component.css']
})
export class GeneralMenuComponent implements OnInit {

  menus : any;
  constructor(private rutes: RutesService, private router: Router,) {

  }

  ngOnInit() {
    this.get_data_menu();
  }


  
  get_data_menu() {
    this.rutes.getPrincipalMenu().then(res => {
      console.log("res -->", res);
       this.menus = res;
    });


  }



  inicio(){
    this.router.navigate(['']);
  }


  goToPost(postslug, categoryID){

    console.log('post slg ', postslug);
    //this.router.navigate(['secciones/'+postslug, {slug: postslug, id:categoryID}]);
    
    /*this.rutes.getPostsbyCategoryID(categoryID).subscribe(res => {
      console.log("getPostsbyCategoryID --> ", res);
    });*/
  }




}
