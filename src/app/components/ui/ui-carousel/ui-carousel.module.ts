import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCarouselComponent } from './ui-carousel.component';



@NgModule({
  declarations: [UiCarouselComponent],
  exports: [UiCarouselComponent],
  imports: [
    CommonModule
  ]
})
export class UiCarouselModule { }
