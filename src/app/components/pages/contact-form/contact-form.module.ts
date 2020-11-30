import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ContactFormModule { }
