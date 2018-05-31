import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AppRoutingModule } from './app-routing.module';
import { UrlService } from './url.service';
import { GotListsComponent } from './got-lists/got-lists.component';
import { BooksComponent } from './books/books.component';
import { HousesComponent } from './houses/houses.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    GotListsComponent,
    BooksComponent,
    HousesComponent,
    HouseDetailsComponent,
    CharactersComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService, UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
