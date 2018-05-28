import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  comics = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient
    .get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a73ad81567539d2f6b1b9ec4ab40cb06&hash=1b662da1c6ffaeb240a1347f5dd16e4e')
    .subscribe(response => {
      this.comics = response.data.results;
    });
  }

}