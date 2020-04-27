import { Component, OnInit } from '@angular/core';

import { Browser } from '../lib/browser/browser';
import { BrowserTypes } from '../enums/browser-types.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  browser: BrowserTypes;

  ngOnInit(): void {
    this.browser = Browser.getName();
  }

  getClassName(): string {
    let className = '';

    switch (this.browser) {
      case BrowserTypes.Chrome:
        className = 'red';
        break;
      case BrowserTypes.Firefox:
        className = 'orange';
        break;
      case BrowserTypes.Safari:
        className = 'blue';
        break;
      case BrowserTypes.Edge:
        className = 'blue';
        break;
      case BrowserTypes.IE:
        className = 'sky';
        break;
      case BrowserTypes.Opera:
        className = 'red';
        break;
      case BrowserTypes.Phantom:
        className = 'purple';
        break;
      default:
        break;
    }

    return className;
  }

}
