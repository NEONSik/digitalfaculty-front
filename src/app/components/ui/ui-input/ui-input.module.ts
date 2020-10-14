import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiInputComponent} from './ui-input.component';


@NgModule({
  declarations: [UiInputComponent],
  exports: [UiInputComponent],
  imports: [
    CommonModule
  ]
})
export class UiInputModule {
}
