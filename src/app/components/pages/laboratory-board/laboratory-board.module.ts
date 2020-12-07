import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaboratoryBoardComponent} from './laboratory-board.component';
import {HeaderModule} from '../../../core/header/header.module';
import {UiSignalModule} from '../../ui/ui-signal/ui-signal.module';


@NgModule({
  declarations: [LaboratoryBoardComponent],
  exports: [LaboratoryBoardComponent],
  imports: [
    CommonModule,
    HeaderModule,
    UiSignalModule
  ]
})
export class LaboratoryBoardModule {
}
