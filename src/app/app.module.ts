import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Wpng2RoutingModule } from './app-routing.module';
import {ShareModule} from 'ng2share/share.module'
import { RouterModule } from '@angular/router';
import { CeiboShare } from 'ng2-social-share';
import { MetaModule } from '@ngx-meta/core';


//SERVICES 
import { RutesService } from './services/rutes.service';

//COMPONENTES
import { GeneralMenuComponent } from './components/general-menu/general-menu.component';
import { MainHomeComponent } from './components/main-home/main-home.component';

//PAGES
import {PostsCategoryListsComponent } from './pages/posts-category-lists/posts-category-lists.component';
import {PostsCategoryLists2Component } from './pages/posts-category-lists-2/posts-category-lists-2.component';
import {PostListCineComponent } from './posts/post-list-cine/post-list-cine.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralMenuComponent,
    MainHomeComponent,
    //PAGES:
    PostsCategoryListsComponent,
    PostsCategoryLists2Component
    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Wpng2RoutingModule,
    ShareModule,
    MetaModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [RutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
