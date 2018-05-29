import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AppRoutingModule } from './app-routing.module';
import {BookurlService} from './bookurl.service';
import { GotListsComponent } from './got-lists/got-lists.component';


@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    GotListsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService, BookurlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
