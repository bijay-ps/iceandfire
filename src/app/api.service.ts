import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BookModel } from './models/book.model';
import { HouseModel } from './models/house.model';
import {CharacterModel} from './models/character.model';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getGOTBooks() {
    return this.http.get<BookModel[]>('https://www.anapioficeandfire.com/api/books');
  }

  getBookDetails(url: string) {
    return this.http.get<BookModel>(url);
  }

  getGOTHouses() {
    return this.http.get<HouseModel[]>('https://www.anapioficeandfire.com/api/houses');
  }

  getHouseDetails(url: string) {
    return this.http.get<HouseModel>(url);
  }

  getGOTCharacters() {
    return this.http.get<CharacterModel[]>('https://www.anapioficeandfire.com/api/characters');
  }

  getCharacterDetails(url: string) {
    return this.http.get<CharacterModel>(url);
  }
}
