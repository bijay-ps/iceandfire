import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseModel } from '../models/house.model';
import { ApiService } from '../api.service';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  housesApiResp: any;
  displayHouses: boolean;

  constructor(private apiService: ApiService,
              private router: Router,
              private houseUrl: UrlService) { }

  ngOnInit() {
    this.displayHouses = false;
    this.apiService.getGOTHouses()
      .subscribe((_houses: HouseModel[]) => {
        this.housesApiResp = _houses;
        this.displayHouses = true;
      });
  }

  viewHouse(url, name) {
    this.houseUrl.sethouseurl(url);
    this.router.navigate(['/house', name]);
  }

}
