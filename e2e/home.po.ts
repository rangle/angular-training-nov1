import { browser, by, element } from 'protractor';

export class HomePage {
  navigateToHome() {
    return browser.get('/home');
  }

  getPosts() {
    return element.all(by.tagName('app-post'));
  }

  getQueryInput() {
    return element(by.css('#qa-input-query'));
  }

  getSearchButton() {
    return element(by.buttonText('Search'));
  }

  getLikeButtons() {
    return element.all(by.css('.qa-like-btn'));
  }
}
