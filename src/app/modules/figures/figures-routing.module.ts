import { NgModule } from '@angular/core';
import { FiguresComponent } from './pages/figures/figures.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: FiguresComponent
    },
  ]
  
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class FiguresRoutingModule { }