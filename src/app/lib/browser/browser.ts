import {
  chrome as isChrome,
  firefox as isFirefox,
  safari as isSafari,
  edge as isEdge,
  ie as isIe,
  opera as isOpera,
  phantom as isPhantom
} from 'is_js';

import { BrowserTypes } from 'src/app/enums/browser-types.enum';

export class Browser {

  static getName(): BrowserTypes {
    let browser: BrowserTypes = null;

    if (isChrome()) {
      browser = BrowserTypes.Chrome;
    } else if (isFirefox()) {
      browser = BrowserTypes.Firefox;
    } else if (isSafari()) {
      browser = BrowserTypes.Safari;
    } else if (isEdge()) {
      browser = BrowserTypes.Edge;
    } else if (isIe()) {
      browser = BrowserTypes.IE;
    } else if (isOpera()) {
      browser = BrowserTypes.Opera;
    } else if (isPhantom()) {
      browser = BrowserTypes.Phantom;
    } else {
      browser = BrowserTypes.Other;
    }

    return browser;
  }

}
