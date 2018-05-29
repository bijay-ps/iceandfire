import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {GotListsComponent} from './got-lists/got-lists.component';

const appRoutes: Routes = [
  { path: '', component: GotListsComponent, pathMatch: 'full'},
  { path: 'book/:name', component: BookDetailsComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
