import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {LaboratoryBoardModule} from './components/pages/laboratory-board/laboratory-board.module';
import {MainModule} from './components/pages/main/main.module';
import {NewsModule} from './components/pages/news/news.module';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/pages/main/main.component';
import {NewsComponent} from './components/pages/news/news.component';
import {ContactsModule} from './components/pages/contacts/contacts.module';
import {ContactsComponent} from './components/pages/contacts/contacts.component';
import {LaboratoriesComponent} from './components/pages/laboratory/laboratories.component';
import {LaboratoriesModule} from './components/pages/laboratory/laboratories.module';
import {LaboratoryBoardComponent} from './components/pages/laboratory-board/laboratory-board.component';
import {ContactFormComponent} from './components/pages/contact-form/contact-form.component';
import {ContactFormModule} from './components/pages/contact-form/contact-form.module';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'laboratories', component: LaboratoriesComponent},
  {path: 'laboratory/:id', component: LaboratoryBoardComponent},
  {path: 'contact-form', component: ContactFormComponent},
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LaboratoryBoardModule,
    MainModule,
    LaboratoriesModule, ContactsModule,
    NewsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
