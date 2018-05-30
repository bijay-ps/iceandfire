import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { GotListsComponent } from './got-lists/got-lists.component';
import { HouseDetailsComponent } from './house-details/house-details.component';

const appRoutes: Routes = [
  { path: '', component: GotListsComponent, pathMatch: 'full'},
  { path: 'book/:name', component: BookDetailsComponent},
  { path: 'house/:housename', component: HouseDetailsComponent},
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
