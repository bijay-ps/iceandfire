import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BookModel } from './models/book.model';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getGOTBooks() {
    return this.http.get<BookModel[]>('https://www.anapioficeandfire.com/api/books');
  }

  getBookDetails(url: string) {
    return this.http.get<BookModel>(url);
  }
}
