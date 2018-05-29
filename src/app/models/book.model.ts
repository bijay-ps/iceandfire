export interface BookModel {

  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: Date;
  characters: string[];
  povCharacters: string[];

  /*constructor( url: string, name: string, isbn: string, authors: string[], numberOfPages: number, publisher: string, country: string, mediaType: string, released: Date,
               characters: string[], povCharacters: string[]){
    this.url = url;
    this.name = name;
    this.isbn = isbn;
    this.authors = authors;
    this.numberOfPages = numberOfPages;
    this.publisher = publisher;
    this.country = country;
    this.mediaType = mediaType;
    this.released = released;
    this.characters = characters;
    this.povCharacters = povCharacters;
  }*/
}


