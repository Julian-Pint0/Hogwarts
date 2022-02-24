import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './pages/students/students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { TableModule } from 'src/app/shared/components/table/table.module'; 
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestsComponent } from './components/requests/requests.component';

@NgModule({
  declarations: [
    StudentsComponent,
    DialogComponent,
    RequestsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    TableModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
