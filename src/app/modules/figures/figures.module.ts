import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FiguresComponent } from './pages/figures/figures.component';
import { FiguresRoutingModule } from './figures-routing.module';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
  declarations: [
    DropdownComponent,
    FiguresComponent,
  ],
  imports: [
    CommonModule,
    FiguresRoutingModule,
    TableModule
  ]
})
export class FiguresModule { }
