import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './components/main-home/main-home.component';

import { MetaGuard } from '@ngx-meta/core';




const routes: Routes = [
  

  {
    path: '',
    component: MainHomeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }