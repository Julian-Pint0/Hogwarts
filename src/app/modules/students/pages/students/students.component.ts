import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { MatDialog } from '@angular/material/dialog'; 
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  columns: string[] = ['name','patronus','image'];
  data: any[] = []
  constructor( private studentsService: StudentsService, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.studentsService.getStudents()
      .subscribe( resp => { 
        this.data = resp;
      });
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent);
  }

}
