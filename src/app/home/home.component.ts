import { Component, OnInit } from '@angular/core';

import { Browsers } from 'src/Enums';
import { findBrowser } from '../../lib/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  browser: Browsers;

  ngOnInit(): void {
    this.browser = findBrowser();
  }

}
