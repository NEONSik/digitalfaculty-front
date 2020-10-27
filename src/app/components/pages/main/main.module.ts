import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {HeaderModule} from '../../../core/header/header.module';
import {UiInputModule} from '../../ui/ui-input/ui-input.module';
import {UiCarouselModule} from '../../ui/ui-carousel/ui-carousel.module';
import {UiNewsModule} from "../../ui/ui-news/ui-news.module";


@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    CommonModule,
    UiInputModule,
    UiCarouselModule,
    UiNewsModule,
    HeaderModule,
  ]
})
export class MainModule {
}
