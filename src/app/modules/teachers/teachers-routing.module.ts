import { NgModule } from '@angular/core';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: TeachersComponent
    },
  ]
  
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class TeachersRoutingModule { }