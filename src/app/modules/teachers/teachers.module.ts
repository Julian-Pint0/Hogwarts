import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { TeachersRoutingModule } from './teachers-routing.module';



@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
