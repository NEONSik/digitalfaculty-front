import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiCubesComponent} from './ui-cubes.component';


@NgModule({
  declarations: [UiCubesComponent],
  exports: [UiCubesComponent],
  imports: [
    CommonModule
  ]
})
export class UiCubesModule {
}
