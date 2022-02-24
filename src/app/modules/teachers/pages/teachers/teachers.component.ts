import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  data: any = [];
  columns: string[] = [ 'name', 'patronus', 'image' ];

  constructor( private teachersService: TeachersService) { }

  ngOnInit(): void {
    this.teachersService.getTeachers()
      .subscribe( (resp:any) => {
        this.data = resp;
      });
  }

}
