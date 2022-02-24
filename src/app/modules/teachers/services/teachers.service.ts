import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'src/app/core/models/data';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor( private http: HttpClient ) { }

  getTeachers(){
    return this.http.get<data[]>(`${environment.api_url}staff`);
  }
}
