import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaboratoryBoardComponent} from './laboratory-board.component';
import {HeaderModule} from '../../../core/header/header.module';
import {UiSignalModule} from '../../ui/ui-signal/ui-signal.module';
import {UiCircleLoadModule} from '../../ui/ui-circle-load/ui-circle-load.module';
import {UiCubesModule} from '../../ui/ui-cubes/ui-cubes.module';


@NgModule({
  declarations: [LaboratoryBoardComponent],
  exports: [LaboratoryBoardComponent],
  imports: [
    CommonModule,
    HeaderModule,
    UiCircleLoadModule,
    UiCubesModule,
    UiSignalModule
  ]
})
export class LaboratoryBoardModule {
}
