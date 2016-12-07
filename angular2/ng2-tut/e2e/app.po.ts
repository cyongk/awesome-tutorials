import { browser, element, by } from 'protractor';

export class Ng2TutPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root mdl-layout-title')).getText();
  }
}
