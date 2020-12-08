import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiCircileLoadComponent} from './ui-circile-load.component';


@NgModule({
  declarations: [UiCircileLoadComponent],
  exports: [UiCircileLoadComponent],
  imports: [
    CommonModule
  ]
})
export class UiCircleLoadModule {
}
