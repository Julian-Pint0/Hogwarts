import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule),
  },
  {
    path: 'figures',
    loadChildren: () => import('./modules/figures/figures.module').then( m => m.FiguresModule),
  },
  {
    path: 'students',
    loadChildren: () => import('./modules/students/students.module').then( m => m.StudentsModule),
  },
  {
    path: 'teachers',
    loadChildren: () => import('./modules/teachers/teachers.module').then( m => m.TeachersModule),
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
