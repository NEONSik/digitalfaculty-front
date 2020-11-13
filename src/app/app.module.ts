import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'laboratories', component: LaboratoriesComponent},
  {path: 'laboratory', component: LaboratoryBoardComponent},
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
