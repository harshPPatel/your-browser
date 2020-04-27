import { Component, Input } from '@angular/core';
import { BrowserTypes } from '../enums/browser-types.enum';

@Component({
  selector: 'app-browser-icon',
  templateUrl: './browser-icon.component.html',
  styleUrls: ['./browser-icon.component.scss']
})
export class BrowserIconComponent {

  @Input() browser: BrowserTypes;

}
