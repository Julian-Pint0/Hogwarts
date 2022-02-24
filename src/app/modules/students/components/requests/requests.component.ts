import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  data: any[] = [];
  columns: string[] = [ 'name', 'lastName', 'gender', 'house' ];

  constructor() { }

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests(){  // se obtienen las solicitudes del localStorage
    if( localStorage.getItem( 'requests' ) ){
      this.data =  JSON.parse (localStorage.getItem( 'requests' ) ?? '' ) ;
    }
  }    


}
