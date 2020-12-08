import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiSignalComponent} from './ui-signal.component';


@NgModule({
  declarations: [UiSignalComponent],
  exports: [UiSignalComponent],
  imports: [
    CommonModule,
  ]
})
export class UiSignalModule {
}
