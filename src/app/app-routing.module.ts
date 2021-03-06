import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { PostSingleNormalComponent } from './posts/post-single-normal/post-single-normal.component';
import { PostListMusicaComponent } from './posts/post-list-musica/post-list-musica.component';
import { PostListCineComponent } from './posts/post-list-cine/post-list-cine.component';
import { PostListLibrosRevistasComponent } from './posts/post-list-libros-revistas/post-list-libros-revistas.component';
import { PostListRadioPodcastComponent } from './posts/post-list-radio-podcast/post-list-radio-podcast.component';
import { PostListGastronomiaComponent } from './posts/post-list-gastronomia/post-list-gastronomia.component';
import { PostListArtesaniaComponent } from './posts/post-list-artesania/post-list-artesania.component';
import { PostListViajesComponent } from './posts/post-list-viajes/post-list-viajes.component';
import { PostListTruequesComponent } from './posts/post-list-trueques/post-list-trueques.component';
import { ExposicionesComponent  } from './posts/exposiciones/exposiciones.component';
import { ConferenciasComponent  } from './posts/conferencias/conferencias.component';
import { PostListEspaciosComponent } from './posts/post-list-espacios/post-list-espacios.component';
import { InicioComponent } from './posts/inicio/inicio.component';
import { OpinionComponent } from './posts/opinion/opinion.component';
import { TeatroComponent } from './posts/teatro/teatro.component';
import { FotografiaComponent } from './posts/fotografia/fotografia.component';
import { TradicionesComponent } from './posts/tradiciones/tradiciones.component';
import { FeriasComponent } from './posts/ferias/ferias.component';

import { MetaGuard } from '@ngx-meta/core';




const routes: Routes = [
  {
    path: 'publicaciones-cartelera',
    component: PostListComponent,
    canActivateChild: [MetaGuard],
    pathMatch: 'full',
    data: {
      meta: {
        title: 'Cultura 3.0',
        description: 'Un suplemento cultural de Revolución 3.0',
        'og:image': 'http://culturatrespuntocero.com/images/generales/logo.png'
      }
    }
  },

  {
    path: 'publicaciones-musica',
    component: PostListMusicaComponent,
    pathMatch: 'full',
    data: {
      meta: {
        title: 'Cultura 3.0',
        description: 'Un suplemento cultural de Revolución 3.0',
        'og:image': 'http://culturatrespuntocero.com/images/generales/logo.png'
      }
    }
  },

   {
    path: 'publicaciones-cine',
    component: PostListCineComponent,
    pathMatch: 'full'
  },

   {
    path: 'publicaciones-libros-revistas',
    component: PostListLibrosRevistasComponent,
    pathMatch: 'full'
  },

   {
    path: 'publicaciones-radio-potcast',
    component: PostListRadioPodcastComponent,
    pathMatch: 'full'
  },

   {
    path: 'publicaciones-gastronomia',
    component: PostListGastronomiaComponent,
    pathMatch: 'full'
  },

   {
    path: 'publicaciones-artesania',
    component: PostListArtesaniaComponent,
    pathMatch: 'full'
  },

   {
    path: 'publicaciones-viajes',
    component: PostListViajesComponent,
    pathMatch: 'full'
  },

  {
    path: 'publicaciones-trueques',
    component: PostListTruequesComponent,
    pathMatch: 'full'
  },

  {
    path: 'publicaciones-espacios',
    component: PostListEspaciosComponent,
    pathMatch: 'full'
  },

   {
    path: 'publicaciones-exposiciones',
    component: ExposicionesComponent,
    pathMatch: 'full'
  },

   {
    path: 'publicaciones-conferencias-cursos-talleres',
    component: ConferenciasComponent,
    pathMatch: 'full'
  },

  {
    path: 'publicaciones-opinion',
    component: OpinionComponent,
    pathMatch: 'full'
  },

   {
    path: 'publicaciones-teatro',
    component: TeatroComponent,
    pathMatch: 'full'
  },


  {
    path: 'publicaciones-fotografia',
    component: FotografiaComponent,
    pathMatch: 'full'
  },

  {
    path: 'publicaciones-tradiciones',
    component: TradicionesComponent,
    pathMatch: 'full'
  },

  {
    path: 'publicaciones-ferias',
    component: FeriasComponent,
    pathMatch: 'full'
  },

  


  {
    path: ':slug',
    component: PostSingleComponent
  },
  {
    path: 'publicaciones/:slug',
    component: PostSingleNormalComponent
  },

  {
    path: '',
    component: InicioComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }