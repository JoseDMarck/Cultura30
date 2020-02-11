import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';


export interface Order {
  // Properties
}

interface ResponseOrders {
  results: Order[];
}



@Injectable()

export class RutesService {
  private postsUrl = "https://revolucion.news/cultura30/wp-json/wp/v2";

  data: any;
  posts: any;
  menus: any;


  
  constructor(private http: HttpClient) { }


  // Regresalos items del menu principal
  getPrincipalMenu() {
    this.menus = [];
    return new Promise(resolve => {
      this.http.get(this.postsUrl + '/menus/principal')
        .subscribe((data: any[] ) => {
          console.log("menus -->", data);
          for (var i = 0; i < data.length; i++) {
            this.menus.push({
              "name": data[i].title,
              "url": data[i].url,
              "categoryID": data[i].object_id,
              "slug": this.getCleanedString(data[i].title),
              "color": ""
            })
    
    
            switch (i % 4) {
              case 0: this.menus[i].color = "color_yellow" ; break;
              case 1: this.menus[i].color = "color_blue"; break;
              case 2: this.menus[i].color = "color_green";  break;
              case 3: this.menus[i].color = "color_pink"; break;
           }   
    
          }
          resolve(this.menus);
        }, err => { console.log(err) })
    });
  }

  

  // Regresa un listado de posts por categoria (ID)
  /*getPostsbyCategoryID(categoryID): Observable<any> {
    console.log("categoryID: ", categoryID)
    return this.http
      .get(this.postsUrl + '/posts?categories=' + categoryID + '&per_page=12&order=asc')
      .map((res: Response) => res.json());
  }*/





  /*getHomePost() {
    this.posts = [];
    return new Promise(resolve => {
      this.http.get(this.postsUrl + '/posts?page=10&order=desc')
        .pipe(map(res => res.json()))
        .subscribe(data => {
          console.log("dataXXX", data.length);
          for (var i = 0; i < data.length; i++) {
            this.posts.push({
              "id": data[i].id,
              "date": data[i].date,
              "guid": data[i].guid.rendered,
              "slug": data[i].slug,
              "title": data[i].title.rendered,
              "content": data[i].content.rendered,
              "autor": data[i].author,
              "featured_media":  data[i].featured_media,
              "categories": data[i].categories,
              "tags": data[i].tags,
              "media": ""
            })
          }

          resolve(this.posts);
        }, err => { console.log(err) })
    });
  }*/




  /*getPostMedia(mediaID) {
    let media = []
    return new Promise(resolve => {
      this.http.get(this.postsUrl + '/media/'+mediaID)
        .map(res => res.json())
        .subscribe(data => {
          media.push({
            "id":data.id,
            "guid": data.guid.rendered
          })

          resolve(this.posts);
        }, err => { console.log(err) })
    })
  }*/


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
