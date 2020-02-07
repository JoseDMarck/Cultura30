import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RutesService {
  private postsUrl = "https://revolucion.news/cultura30/wp-json/wp/v2";


  constructor(private http: Http) { }


  // Regresalos items del menu principal
  getPrincipalMenu(): Observable<any> {
    return this.http
      .get(this.postsUrl + '/menus/principal')
      .map((res: Response) => res.json())
  }



}
