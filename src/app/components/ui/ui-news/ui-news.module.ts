import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNewsComponent } from './ui-news.component';



@NgModule({
  declarations: [UiNewsComponent],
  exports: [UiNewsComponent],
  imports: [
    CommonModule
  ]
})
export class UiNewsModule { }
