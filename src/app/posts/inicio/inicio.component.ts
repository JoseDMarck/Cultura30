import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate,transition } from '@angular/animations';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('800ms ease-in'))
    ])
  ],
  providers: [PostsService]
})
export class InicioComponent implements OnInit {

  show = false;
  
  posts_cartelera: Post[];
  posts_musica: Post[];
  posts_cine: Post[];
  posts_librosRevistas: Post[];
  posts_radioPodcast: Post[];
  posts_gastronomia: Post[];
  posts_artesania: Post[];
  posts_viajes: Post[];
  posts_trueques: Post[];
  posts_espacios: Post[];
  posts_exposiciones: Post[];
  posts_conferencias: Post[];
  posts_opinion: Post[];
  posts_teatro: Post[];
  posts_fotografia: Post[];

  exist_posts_musica: boolean;
  exist_posts_cine: boolean;
  exist_posts_librosRevistas: boolean;
  exist_posts_radioPodcast: boolean;
  exist_posts_gastronomia: boolean;
  exist_posts_artesania: boolean;
  exist_posts_viajes: boolean;
  exist_posts_trueques: boolean;
  exist_posts_espacios: boolean;
  exist_posts_exposiciones: boolean;
  exist_posts_conferencias: boolean;
  exist_posts_opinion: boolean;
  exist_posts_teatro: boolean;
  exist_posts_fotografia: boolean;




  categorias: Post[];
  post_count:number;
  categoriasCount:any;
  arregloCountCat:any;
  loadMoreVisible : boolean;
  selectedClass: number;

  constructor(private postsService: PostsService, private router: Router) { 
    this.arregloCountCat = [];
    this.loadMoreVisible = false
  }



  getPosts_catelera(){
    this.postsService
      .getPosts_cartelera_home()
      .subscribe(res => {
        this.posts_cartelera = res;
      });
  }

   getPosts_musica(){
    this.postsService
      .getPosts_musica_home()
      .subscribe(res => {
        this.posts_musica = res;

        if (this.posts_musica.length > 0){  this.exist_posts_musica = true; }
        else { this.exist_posts_musica = false }
      });
  }


  getPosts_cine(){
    this.postsService
      .getPosts_cine_home()
      .subscribe(res => {
        this.posts_cine = res;

         if (this.posts_cine.length > 0){  this.exist_posts_cine = true; }
        else { this.exist_posts_cine = false }
      });
  }

   getPosts_librosRevistas(){
    this.postsService
      .getPosts_libros_revistas_home()
      .subscribe(res => {
        this.posts_librosRevistas = res;

        if (this.posts_librosRevistas.length > 0){  this.exist_posts_librosRevistas = true; }
        else { this.exist_posts_librosRevistas = false }

      });
  }


  getPosts_RadioPodcast(){
    this.postsService
      .getPosts_radio_podcast_home()
      .subscribe(res => {
        this.posts_radioPodcast = res;

         if (this.posts_radioPodcast.length > 0){  this.exist_posts_radioPodcast = true; }
        else { this.exist_posts_radioPodcast = false }
      });
  }


   getPosts_Gastronomia(){
    this.postsService
      .getPosts_gastronomia_home()
      .subscribe(res => {
        this.posts_gastronomia = res;

        if (this.posts_gastronomia.length > 0){  this.exist_posts_gastronomia = true; }
        else { this.exist_posts_gastronomia = false }
      });
  }


  getPosts_Artesania(){
    this.postsService
      .getPosts_artesania_home()
      .subscribe(res => {
        this.posts_artesania = res;

        if (this.posts_artesania.length > 0){  this.exist_posts_artesania = true; }
        else { this.exist_posts_artesania = false }
      });
  }

   getPosts_viajes(){
    this.postsService
      .getPosts_viajes_home()
      .subscribe(res => {
        this.posts_viajes = res;

        if (this.posts_viajes.length > 0){  this.exist_posts_viajes = true; }
        else { this.exist_posts_viajes = false }
      });
  }


    getPosts_trueque(){
    this.postsService
      .getPosts_trueques_home()
      .subscribe(res => {
        this.posts_trueques = res;

        if (this.posts_trueques.length > 0){  this.exist_posts_trueques = true; }
        else { this.exist_posts_trueques = false }
      });
  }

  getPosts_espacios(){
    this.postsService
      .getPosts_espacios_home()
      .subscribe(res => {
        this.posts_espacios = res;

        if (this.posts_espacios.length > 0){  this.exist_posts_espacios = true; }
        else { this.exist_posts_espacios = false }
      });
  }

  getPosts_exposiciones(){
    this.postsService
      .getPosts_exposiciones_home()
      .subscribe(res => {
        this.posts_exposiciones = res;

        if (this.posts_exposiciones.length > 0){  this.exist_posts_exposiciones = true; }
        else { this.exist_posts_exposiciones = false }

      });
  }


  getPosts_teatro(){
    this.postsService
      .getPosts_teatro_home()
      .subscribe(res => {
        this.posts_teatro = res;

        if (this.posts_teatro.length > 0){  this.exist_posts_teatro = true; }
        else { this.exist_posts_teatro = false }

      });
  }


  getPosts_ConfCursTall(){
    this.postsService
      .getPosts_ConfCursTall_home()
      .subscribe(res => {
        this.posts_conferencias = res;

        if (this.posts_conferencias.length > 0){  this.exist_posts_conferencias = true; }
        else { this.exist_posts_conferencias = false }
      });
  }

  getPosts_Opinion(){
    this.postsService
      .getPosts_opinion_home()
      .subscribe(res => {
        this.posts_opinion = res;

        if (this.posts_opinion.length > 0){  this.exist_posts_opinion = true; }
        else { this.exist_posts_opinion = false }
      });
  }


  getPosts_Fotografia(){
    this.postsService
      .getPosts_fotografia_home()
      .subscribe(res => {
        this.posts_fotografia = res;

        if (this.posts_fotografia.length > 0){  this.exist_posts_fotografia = true; }
        else { this.exist_posts_fotografia  = false }
      });
  }



    //ANIMACION TOGGLE
    get stateName() {
        return this.show ? 'show' : 'hide'
     }

    toggle() {
        this.show = !this.show;
    }


  ngAfterViewInit() {
   
   console.log("estoy  en ngAfterViewInit")
   setTimeout(() => { 
     this.toggle()
   }, 300); // Or however long you need the delay to be
  

  }

   ngOnDestroy() {
     console.log("Destroy*******")

  }


  ngOnInit() {
  	this.getPosts_cine();
  	this.getPosts_catelera();
  	this.getPosts_musica();
    this.getPosts_librosRevistas();
    this.getPosts_RadioPodcast();
    this.getPosts_Artesania();
    this.getPosts_Gastronomia();
    this.getPosts_viajes();
    this.getPosts_trueque();
    this.getPosts_espacios();
    this.getPosts_exposiciones();
    this.getPosts_ConfCursTall();
    this.getPosts_Opinion();
    this.getPosts_teatro();
    this.getPosts_Fotografia();
  }


 selectPost(slug) {
	 this.router.navigate([slug]);
   //this.router.navigate([slug]);
    console.log("Slug normal", slug)
}


SelecccionMenu(slug:string ) {
    this.router.navigate(["publicaciones-"+slug]);
    console.log(slug);
  
}


}
