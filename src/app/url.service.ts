import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
  private _bookurl: string;
  private _houseurl: string;
  private _characterurl: string;

  constructor() { }

  getbookurl(): string {
    return this._bookurl;
  }

  setbookurl(value: string) {
    this._bookurl = value;
  }

  gethouseurl(): string {
    return this._houseurl;
  }

  sethouseurl(value: string) {
    this._houseurl = value;
  }

  getcharacterurl(): string {
    return this._characterurl;
  }

  setcharacterurl(value: string) {
    this._characterurl = value;
  }
}
