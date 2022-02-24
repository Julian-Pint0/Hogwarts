import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { data } from 'src/app/core/models/data';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  constructor( private http: HttpClient ) { }

  getStudents(){
    return this.http.get<data[]>(`${environment.api_url}students`);
  }
}
