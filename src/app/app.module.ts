import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Wpng2RoutingModule } from './app-routing.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { AppComponent } from './app.component';

//SERVICES 
import { RutesService } from './services/rutes.service';

//COMPONENTES
import { GeneralMenuComponent } from './components/general-menu/general-menu.component';
import { MainHomeComponent } from './components/main-home/main-home.component';

//PAGES
import {PostsCategoryListsComponent } from './pages/posts-category-lists/posts-category-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    //COMPONENTES
    GeneralMenuComponent,
    MainHomeComponent,
    //PAGES:
    PostsCategoryListsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Wpng2RoutingModule,
    BrowserAnimationsModule,
    NgxMasonryModule
  ],
  providers: [RutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
