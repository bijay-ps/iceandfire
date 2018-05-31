import { Component, OnInit } from '@angular/core';
import {UrlService} from '../url.service';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {CharacterModel} from '../models/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  displayDetails: boolean;
  characterDetails: any;

  constructor(private apiService: ApiService,
              private characterUrl: UrlService,
              private router: Router) { }

  ngOnInit() {
    this.displayDetails = false;
    if (this.characterUrl.getcharacterurl()) {
      this.viewCharacterDetails(this.characterUrl.getcharacterurl());
    } else {
      this.router.navigate(['/']);
    }
  }

  viewCharacterDetails(url) {
    this.apiService.getCharacterDetails(url)
      .subscribe((_resp: CharacterModel) => {
        this.characterDetails = _resp;
        this.displayDetails = true;
      });
  }
}
