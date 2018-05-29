import { Component, OnInit } from '@angular/core';
import {BookurlService} from '../bookurl.service';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {BookModel} from '../models/book.model';

@Component({
  selector: 'app-got-lists',
  templateUrl: './got-lists.component.html',
  styleUrls: ['./got-lists.component.css']
})
export class GotListsComponent implements OnInit {
  booksApiResp: any;

  constructor(private apiService: ApiService,
              private bookUrl: BookurlService,
              private router: Router) { }

  ngOnInit() {
    this.apiService.getGOTBooks()
      .subscribe((_resp: BookModel[]) => {
        this.booksApiResp = _resp;
      });
  }

  viewBook(url: string, name: string) {
    this.bookUrl.setbookurl(url);
    this.router.navigate(['/book', name]);
  }

}
