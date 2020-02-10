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

  menus = [];
  constructor(private rutes: RutesService, private router: Router,) {

  }

  ngOnInit() {
    this.get_data_menu();
  }


  
  get_data_menu() {
    this.rutes.getPrincipalMenu().subscribe(res => {
      console.log("res -->", res);
      for (var i = 0; i < res.length; i++) {
        this.menus.push({
          "name": res[i].title,
          "url": res[i].url,
          "categoryID": res[i].object_id,
          "slug": this.getCleanedString(res[i].title)
        })
      }
    });

  }



  inicio(){
    this.router.navigate(['']);
  }


  goToPost(postslug, categoryID){

    console.log('post slg ', postslug);
    this.router.navigate(['secciones/'+postslug, {slug: postslug, id:categoryID}]);
    
    /*this.rutes.getPostsbyCategoryID(categoryID).subscribe(res => {
      console.log("getPostsbyCategoryID --> ", res);
    });*/
  }


   getCleanedString(cadena){
    // Definimos los caracteres que queremos eliminar
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
 
    // Los eliminamos todos
    for (var i = 0; i < specialChars.length; i++) {
        cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }   
 
    // Lo queremos devolver limpio en minusculas
    cadena = cadena.toLowerCase();
 
    // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
    cadena = cadena.replace(/ /g,"-");
 
    // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
    cadena = cadena.replace(/á/gi,"a");
    cadena = cadena.replace(/é/gi,"e");
    cadena = cadena.replace(/í/gi,"i");
    cadena = cadena.replace(/ó/gi,"o");
    cadena = cadena.replace(/ú/gi,"u");
    cadena = cadena.replace(/ñ/gi,"n");
    return cadena;
 }

}
