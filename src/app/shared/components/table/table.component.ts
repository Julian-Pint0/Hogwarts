import { data } from 'src/app/core/models/data';
import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, ViewChild, AfterViewInit } from '@angular/core';
import { FiguresService } from 'src/app/modules/figures/services/figures.service';
import { concatMap, from, pluck, switchMap, tap, map, of, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild( MatSort ) sort!: MatSort;
  @Input() data: any= [];
  @Input() columns: string[] = [];

  flag: boolean = false;
  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<data[]>;

  constructor( private figuresService: FiguresService ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayedColumns = [...this.columns];
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.data.length > 0 ? this.flag = true:  this.flag = false;  // bandera para mostrar la tabla cuándo ya cuenta con datos
  }

  applyFilter(event: Event) { //funcion para el filtrado de los datos
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
