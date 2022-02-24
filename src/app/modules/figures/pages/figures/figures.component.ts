import { FiguresService } from './../../services/figures.service';
import { Component, OnInit, Input } from '@angular/core';
import { data } from 'src/app/core/models/data';
import { switchMap, concatMap, from, of, map, Observable } from 'rxjs';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.css']
})
export class FiguresComponent implements OnInit {

  data: any[] = [];
  columns: string[] = [ 'name', 'patronus', 'image'];

  constructor( private figuresService: FiguresService) { }


  ngOnInit(): void {
    this.getFigures();
  }

  getFigures(){   //suscripción al observable de personajes para enviar la data a la tabla
    this.figuresService.figures
      .subscribe( (resp: any) =>  { 
        this.data = [...resp];
      });
  }


}




// this.figuresService.figures
// .pipe( 
//   switchMap( (dat:any) => from(dat) ), 
//   concatMap( value => of(value)
//     .pipe( 
//       map( ( figure:any ) => { 
//         this.dataS.push( { name: figure.name, patronus: figure.patronus, age: figure.age, image: figure.image } ) ;
//         return this.dataS;
//       } )  
//     ) 
//   )
// )
// .subscribe( resp =>  { 
//   // console.log(resp);
//   this.data = [];
//   this.data = [...resp];
// });

// }