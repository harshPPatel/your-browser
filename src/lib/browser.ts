import {
  chrome as isChrome,
  firefox as isFirefox,
  safari as isSafari,
  edge as isEdge,
  ie as isIe,
  opera as isOpera,
  phantom as isPhantom
} from 'is_js';

import { Browsers } from '../Enums';

export const findBrowser = (): Browsers => {
  let browser: Browsers = null;

  if (isChrome()) {
    browser = Browsers.Chrome;
  } else if (isFirefox()) {
    browser = Browsers.Firefox;
  } else if (isSafari()) {
    browser = Browsers.Safari;
  } else if (isEdge()) {
    browser = Browsers.Edge;
  } else if (isIe()) {
    browser = Browsers.IE;
  } else if (isOpera()) {
    browser = Browsers.Opera;
  } else if (isPhantom()) {
    browser = Browsers.Phantom;
  } else {
    browser = Browsers.Other;
  }

  return browser;
};

export default {
  findBrowser,
};
