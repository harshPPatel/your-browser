import { Browser } from './browser';
import { BrowserTypes } from 'src/app/enums/browser-types.enum';

describe('Browser', () => {
  it('should return user\'s browser', () => {
    const browsers = Object.values(BrowserTypes);
    expect(browsers.includes(Browser.getName())).toBeTrue();
  });
});
