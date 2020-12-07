import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaboratoriesComponent} from './laboratories.component';
import {RouterModule} from '@angular/router';
import {HeaderModule} from '../../../core/header/header.module';


@NgModule({
  declarations: [LaboratoriesComponent],
  exports: [LaboratoriesComponent],
  imports: [
    HeaderModule,
    CommonModule,
    RouterModule
  ]
})
export class LaboratoriesModule {
}
