import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsCategoryListsComponent } from './pages/posts-category-lists/posts-category-lists.component';
import {PostsCategoryLists2Component } from './pages/posts-category-lists-2/posts-category-lists-2.component';


 
const routes: Routes = [
  {
    path: 'secciones/:slug',
    component: PostsCategoryListsComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class Wpng2RoutingModule { }