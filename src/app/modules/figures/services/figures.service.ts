import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { Subject } from 'rxjs';
import { data } from 'src/app/core/models/data';

@Injectable({
  providedIn: 'root'
})
export class FiguresService {

  figures = new Subject(); 

  constructor( private http: HttpClient ) { }

  getWizardingHouses( wizardingHouse: string){
    return this.http.get<data[]>(`${environment.api_url}house/${wizardingHouse}`);

  }
}
