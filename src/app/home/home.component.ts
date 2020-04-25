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

}
