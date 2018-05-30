import { Component, OnInit } from '@angular/core';
import {UrlService} from '../url.service';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {BookModel} from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  booksApiResp: any;
  displayBooks: boolean;

  constructor(private apiService: ApiService,
              private bookUrl: UrlService,
              private router: Router) { }

  ngOnInit() {
    this.displayBooks = false;
    this.apiService.getGOTBooks()
      .subscribe((_resp: BookModel[]) => {
        this.booksApiResp = _resp;
        this.displayBooks = true;
      });
  }

  viewBook(url: string, name: string) {
    this.bookUrl.setbookurl(url);
    this.router.navigate(['/book', name]);
  }

}
