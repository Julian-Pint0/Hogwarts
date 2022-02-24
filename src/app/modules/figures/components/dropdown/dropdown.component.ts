import { Component, OnInit } from '@angular/core';
import { FiguresService } from '../../services/figures.service';
import { data } from 'src/app/core/models/data';
import { switchMap, concatMap, from, of, map } from 'rxjs'; 

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  wizardingHouses: string[] = [ 'Gryffindor', 'Hufflepuff', 'Ravenclaw' ,'Slytherin' ];

  constructor( private figuresService: FiguresService) { }

  ngOnInit(): void {
  }

  getFigures(pos: number){ // se obtienen los personajes
    this.figuresService.getWizardingHouses( this.wizardingHouses[pos] )
      .subscribe( (resp: data[]) => {
        this.figuresService.figures.next( resp );
      });
  }

}
