import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaboratoriesComponent} from './laboratories.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [LaboratoriesComponent],
  exports: [LaboratoriesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LaboratoriesModule {
}
