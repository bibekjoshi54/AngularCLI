import { browser, by, element } from 'protractor';

export class MyAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bj-root h1')).getText();
  }
}
