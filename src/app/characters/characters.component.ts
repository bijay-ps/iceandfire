import { Component, OnInit } from '@angular/core';
import {UrlService} from '../url.service';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {CharacterModel} from '../models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  displayCharacters: boolean;
  charactersApiResp: any;

  constructor(private apiService: ApiService,
              private router: Router,
              private characterUrl: UrlService) { }

  ngOnInit() {
    this.displayCharacters = false;
    this.apiService.getGOTCharacters()
      .subscribe((_characters: CharacterModel[]) => {
        this.charactersApiResp = _characters;
        this.displayCharacters = true;
      });
  }

  viewCharacter(url, name = 'no name') {
    this.characterUrl.setcharacterurl(url);
    this.router.navigate(['/character', name]);
  }
}
