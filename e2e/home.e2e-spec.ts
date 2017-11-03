import { HomePage } from './home.po';
import { browser } from 'protractor';

describe('App Home Page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display all posts', () => {
    page.navigateToHome();
    expect(page.getPosts().count()).toBe(100);
  });

  it('should filter posts by query', () => {
    page.navigateToHome();

    const queryInput = page.getQueryInput();
    queryInput.clear();
    queryInput.sendKeys('sunt aut');
    page.getSearchButton().click();

    expect(page.getPosts().count()).toBe(2);
  });

  it('should be able to like a post', () => {
    page.navigateToHome();

    const likeButton = page.getLikeButtons().get(0);
    likeButton.click();

    // browser.wait(() => new Promise(r => {
    //   setTimeout(() => r(), 2000);
    // }), 5 * 1000);

    expect(likeButton.getText()).toEqual('1');
  });
});
