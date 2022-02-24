import { RequestsComponent } from './components/requests/requests.component';
import { NgModule } from '@angular/core';
import { StudentsComponent } from './pages/students/students.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      component: StudentsComponent
    },
    {
      path: 'requests',
      component: RequestsComponent
    }
  ]
  
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class StudentsRoutingModule { }