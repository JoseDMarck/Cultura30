 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Wpng2RoutingModule } from './app-routing.module';
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
import { PostListEspaciosComponent } from './posts/post-list-espacios/post-list-espacios.component';
import { ExposicionesComponent  } from './posts/exposiciones/exposiciones.component';
import { ConferenciasComponent  } from './posts/conferencias/conferencias.component';
import { InicioComponent } from './posts/inicio/inicio.component';
import { OpinionComponent } from './posts/opinion/opinion.component';
import { TeatroComponent } from './posts/teatro/teatro.component';
import { FotografiaComponent } from './posts/fotografia/fotografia.component';
import { TradicionesComponent } from './posts/tradiciones/tradiciones.component';
import { FeriasComponent } from './posts/ferias/ferias.component';



import {ShareModule} from 'ng2share/share.module'


import { MenuGeneralComponent } from './posts/menu-general/menu-general.component';
import { RouterModule } from '@angular/router';
import { CeiboShare } from 'ng2-social-share';
import { MetaModule } from '@ngx-meta/core';






  



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    PostSingleNormalComponent,
    PostListMusicaComponent,
    PostListCineComponent,
    PostListLibrosRevistasComponent,
    PostListRadioPodcastComponent,
    PostListGastronomiaComponent,
    PostListArtesaniaComponent,
    PostListViajesComponent,
    PostListTruequesComponent,
    MenuGeneralComponent,
    InicioComponent,
    OpinionComponent,
    ExposicionesComponent,
    ConferenciasComponent,
    TeatroComponent,
    FotografiaComponent,
    TradicionesComponent,
    FeriasComponent,
    CeiboShare,
    PostListEspaciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Wpng2RoutingModule,
    ShareModule,
    MetaModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
