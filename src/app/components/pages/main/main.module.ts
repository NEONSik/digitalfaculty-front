import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {HeaderModule} from '../../../core/header/header.module';
import {UiInputComponent} from '../../ui/ui-input/ui-input.component';
import {UiInputModule} from '../../ui/ui-input/ui-input.module';


@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    CommonModule,
    UiInputModule,
    HeaderModule,
  ]
})
export class MainModule {
}
