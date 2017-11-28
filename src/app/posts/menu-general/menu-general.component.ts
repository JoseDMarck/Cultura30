import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

import { Router } from '@angular/router';
import { trigger, state, style, animate,transition } from '@angular/animations';

import {  PostListMusicaComponent } from '../post-list-musica/post-list-musica.component';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {

@Input('master') masterName: string;


menu_current:any;
selectedClass: number;
  constructor(private router: Router) { 
    this.selectedClass = 0;
   

  }



  ngOnInit() {

     console.log("MASTER NAME", this.masterName);

  }


SeleccionMenu(ValorNuevo: number, slug:string ) {
   
  if (this.selectedClass === ValorNuevo) {
      this.selectedClass = 0;
  }

  else {
    	this.selectedClass = ValorNuevo;
    	//Vamos a la pagina:
   	 	this.router.navigate(["publicaciones-"+slug]);
    	console.log(slug);
  	}


  
	}


GotoInicio(ValorNuevo: number ) {
	
  if (this.selectedClass === ValorNuevo) {
      this.selectedClass = 0;
  }

  else {
        this.selectedClass = ValorNuevo;
        this.router.navigate([""]);
    }



 
}


}


