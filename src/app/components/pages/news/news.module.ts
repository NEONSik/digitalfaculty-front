import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import {HeaderModule} from "../../../core/header/header.module";



@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class NewsModule { }
