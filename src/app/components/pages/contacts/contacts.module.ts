import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import {HeaderModule} from '../../../core/header/header.module';
import {UiInputModule} from '../../ui/ui-input/ui-input.module';



@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    UiInputModule
  ]
})
export class ContactsModule { }
