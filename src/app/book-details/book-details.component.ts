import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {BookurlService} from '../bookurl.service';
import {Router} from '@angular/router';
import {BookModel} from '../models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookDetails: any;
  displayDetails: boolean;
  authors: string[];

  constructor(private apiService: ApiService,
              private bookUrl: BookurlService,
              private router: Router) { }

  ngOnInit() {
    this.displayDetails = false;
    if (this.bookUrl.getbookurl()) {
      this.viewBookDetails(this.bookUrl.getbookurl());
    } else {
      this.router.navigate(['/']);
    }
  }

  viewBookDetails(url) {
    this.apiService.getBookDetails(url)
      .subscribe((_resp: BookModel) => {
        this.bookDetails = _resp;
        this.authors = this.bookDetails.authors;
        this.displayDetails = true;
      });
  }

}
