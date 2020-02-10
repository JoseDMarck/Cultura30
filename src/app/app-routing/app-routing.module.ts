import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsCategoryListsComponent } from '../pages/posts-category-lists/posts-category-lists.component';


const routes: Routes = [
  { path: 'publicaciones', component: PostsCategoryListsComponent },

  {
    path: 'publicaciones/:slug',
    component: PostsCategoryListsComponent
  },


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }