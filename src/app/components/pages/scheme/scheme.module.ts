import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SchemeComponent} from './scheme.component';
import {HeaderModule} from '../../../core/header/header.module';


@NgModule({
  declarations: [SchemeComponent],
  exports: [SchemeComponent],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class SchemeModule {
}
