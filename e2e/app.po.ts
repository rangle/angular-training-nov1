import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPosts() {
    return element.all(by.tagName('app-post'));
  }

  getQueryInput() {
    return element(by.css('input[name=query]'));
  }

  getSearchButton() {
    return element(by.buttonText('Search'));
  }

  getLikeButtons() {
    return element.all(by.css('.qa-like-btn'));
  }
}
