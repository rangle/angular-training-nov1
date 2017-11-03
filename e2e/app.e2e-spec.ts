import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('angular-training-nov1 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display all posts', () => {
    page.navigateTo();
    expect(page.getPosts().count()).toBe(100);
  });

  it('should filter posts by query', () => {
    page.navigateTo();

    const queryInput = page.getQueryInput();
    queryInput.clear();
    queryInput.sendKeys('sunt aut');
    page.getSearchButton().click();

    expect(page.getPosts().count()).toBe(2);
  });

  it('should be able to like a post', () => {
    page.navigateTo();

    const likeButton = page.getLikeButtons().get(0);
    likeButton.click();

    expect(likeButton.getText()).toEqual('1');

  });
});
