import { Component, Input, OnInit, AfterViewChecked, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  desconto: string;
  attributionHTML;

  constructor(private httpClient: HttpClient){
    this.desconto = "../../assets/images/desconto.png"
  }

  ngOnInit(){
  
   this.httpClient
    .get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a73ad81567539d2f6b1b9ec4ab40cb06&hash=1b662da1c6ffaeb240a1347f5dd16e4e')
    .subscribe(response => {
     this.attributionHTML = response.attributionHTML;
    });
  }
}
