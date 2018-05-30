import { Injectable } from '@angular/core';

@Injectable()
export class BookurlService {
  private _bookurl: string;

  constructor() { }

  getbookurl(): string {
    return this._bookurl;
  }

  setbookurl(value: string) {
    this._bookurl = value;
  }

}
