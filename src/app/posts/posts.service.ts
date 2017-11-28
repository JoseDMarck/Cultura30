import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostsService {
private postsUrl = "http://michoacantrespuntocero.com/cultura30/wp-json/wp/v2/";

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    	return this.http
      	.get(this.postsUrl + 'posts?categories=15&per_page=12&order=asc')
      	.map((res: Response) => res.json());
	}


	getPost(slug): Observable<Post> {
        return this.http
        .get(this.postsUrl + `posts?slug=${slug}`)
        .map((res: Response) => res.json());
  }

    getPostNormal(slug): Observable<Post> {
        return this.http
        .get(this.postsUrl + `posts?slug=${slug}`)
        .map((res: Response) => res.json());
  }


  getPostMedia(id): Observable<Post> {
        return this.http
        .get(this.postsUrl + 'media/'+id)
        .map((res: Response) => res.json());
  }


   // LOADMORE SERVICIO
   LoadMorePostsService(id_cat, numero): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories='+id_cat+'&per_page='+numero+'&order=asc')
        .map((res: Response) => res.json());
  }

   // LOADMORE SERVICIO
   LoadMorePostsServiceNormal(id_cat, numero): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories='+id_cat+'&per_page='+numero+'&order=desc')
        .map((res: Response) => res.json());
  }




  //GetCategoryCount http://meditarensupabra.com/demos/AudiosCDO//wp-json/wp/v2/categories

   GetCategoryCount(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/15')
        .map((res: Response) => res.json());
  }

  GetCategoryCountMusica(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/19')
        .map((res: Response) => res.json());
  }

  GetCategoryCountCine(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/20')
        .map((res: Response) => res.json());
  }

  GetCategoryCountGatronomia(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/24')
        .map((res: Response) => res.json());
  }


  GetCategoryCountLibrosRevistas(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/22')
        .map((res: Response) => res.json());
  }



  GetCategoryCountRadioPodcast(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/23')
        .map((res: Response) => res.json());
  }


   GetCategoryCountArtesanoias(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/25')
        .map((res: Response) => res.json());
  }


   GetCategoryCountViajes(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/26')
        .map((res: Response) => res.json());
  }


  GetCategoryCountTrueques(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/27')
        .map((res: Response) => res.json());
  }

  GetCategoryCountEspacios(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/28')
        .map((res: Response) => res.json());
  }

  GetCategoryCountExposiciones(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/29')
        .map((res: Response) => res.json());
  }


  GetCategoryCountConfCursTall(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/30')
        .map((res: Response) => res.json());
  }

   GetCategoryCountOpinion(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/45')
        .map((res: Response) => res.json());
  }

  GetCategoryCountTeatro(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/54')
        .map((res: Response) => res.json());
  }

  GetCategoryCountFotografia(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'categories/55')
        .map((res: Response) => res.json());
  }





    // POST PARA CINE
   getPosts_cartelera_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=15&per_page=5&order=desc')
        .map((res: Response) => res.json());
  }



  // POST PARA MUSICA 
   getPosts_musica(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=19&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }

   // POST PARA MUSICA 
   getPosts_musica_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=19&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }


   // POST PARA CINE
   getPosts_cine(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=20&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }

   // POST PARA CINE
   getPosts_cine_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=20&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }

     // POST PARA LIBROS/REVISTAS
   getPosts_libros_revistas(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=22&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }


  getPosts_libros_revistas_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=22&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }


     // POST PARA RADIO/PODCAST
   getPosts_radio_podcast(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=23&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }

  getPosts_radio_podcast_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=23&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }


     // POST PARA GASTRONOMIA
   getPosts_gastronomia(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=24&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }

  getPosts_gastronomia_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=24&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }

     // POST PARA ARTESANIA
   getPosts_artesania(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=25&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }

  getPosts_artesania_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=25&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }




     // POST PARA VIAJES
   getPosts_viajes(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=26&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }

     // POST PARA VIAJES
   getPosts_viajes_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=26&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }

     // POST PARA TRUEQUES
   getPosts_trueques(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=27&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }

     // POST PARA TRUEQUES
   getPosts_trueques_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=27&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }

     // POST PARA ESPACIOS
   getPosts_espacios(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=28&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }

      // POST PARA ESPACIOS
   getPosts_espacios_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=28&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }


    // POST PARA EXPOSICIONES
   getPosts_exposiciones(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=29&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }

      // POST PARA ESPACIOS
   getPosts_exposiciones_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=29&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }

  
      // POST PARA EXPOSICIONES
   getPosts_teatro(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=54&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }



  // POST PARA TEATRO
   getPosts_teatro_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=54&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }




  // POST PARA OPINION
   getPosts_opinion(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=45&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }


    // POST PARA OPINION
   getPosts_opinion_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=45&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }



 // POST PARA CONFERENCIAS, CURSOS, TALLERES
   getPosts_ConfCursTall(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=30&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }

// POST PARA CONFERENCIAS, CURSOS, TALLERES
 getPosts_ConfCursTall_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=30&per_page=6&order=desc')
        .map((res: Response) => res.json());
 }




// POST PARA FOTOGRAFÍAS 
  getPosts_fotografia(): Observable<Post[]> {
      return this.http
       .get(this.postsUrl + 'posts?categories=55&per_page=12&order=desc')
        .map((res: Response) => res.json());
  }


  getPosts_fotografia_home(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=55&per_page=6&order=desc')
        .map((res: Response) => res.json());
  }



// PARA LOS MESES DE LA CARTELERA =====================================
 getPosts_Enero(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=31&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }


  getPosts_Febrero(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=32&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }


  getPosts_Marzo(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=33&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }

   getPosts_Abril(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=34&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }


   getPosts_Mayo(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=35&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }


   getPosts_Junio(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=36&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }

   getPosts_Julio(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=37&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }


   getPosts_Agosto(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=38&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }


   getPosts_Septiembre(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=39&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }



   getPosts_Octubre(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=40&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }


   getPosts_Noviembre(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=41&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }

  getPosts_Diciembre(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=42&per_page=100&order=asc')
        .map((res: Response) => res.json());
  }






}
