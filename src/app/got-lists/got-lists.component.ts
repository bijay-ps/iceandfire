import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BookurlService} from '../bookurl.service';

@Component({
  selector: 'app-got-lists',
  templateUrl: './got-lists.component.html',
  styleUrls: ['./got-lists.component.css']
})
export class GotListsComponent implements OnInit {

  displayBookResults = false;

  constructor(private bookUrl: BookurlService) { }

  ngOnInit() {

  }

}
