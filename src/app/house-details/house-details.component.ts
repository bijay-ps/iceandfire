import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {UrlService} from '../url.service';
import {Router} from '@angular/router';
import {HouseModel} from '../models/house.model';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  displayHouseDetails: boolean;
  houseDetails: any;

  constructor(private apiService: ApiService,
              private houseUrl: UrlService,
              private router: Router) { }

  ngOnInit() {
    this.displayHouseDetails = false;
    if (this.houseUrl.gethouseurl()) {
      this.viewHouseDetails(this.houseUrl.gethouseurl());
    } else {
      this.router.navigate(['/']);
    }
  }

  viewHouseDetails(url) {
    this.apiService.getHouseDetails(url)
      .subscribe((_house: HouseModel) => {
        this.houseDetails = _house;
        this.displayHouseDetails = true;
      });
  }
}
