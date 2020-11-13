import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaboratoryBoardComponent} from './laboratory-board.component';
import {HeaderModule} from '../../../core/header/header.module';


@NgModule({
  declarations: [LaboratoryBoardComponent],
  exports: [LaboratoryBoardComponent],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class LaboratoryBoardModule {
}
