import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class PostsActions {

  static FETCH = {
    POSTS: 'Posts/FETCH/POSTS',
    STARTED: 'Posts/FETCH/STARTED',
    SUCCESS: 'Posts/FETCH/SUCCESS',
    FALED: 'Posts/FETCH/FALED',
  };

  static LIKE = 'Posts/LIKE';

  constructor(private store: Store<any>) {}

  fetchPosts() {
    this.store.dispatch({ type: PostsActions.FETCH.POSTS });
  }

  like(id) {
    this.store.dispatch({ type: PostsActions.LIKE, payload: id });
  }

}


@Injectable()
export class UiActions {

  static SEARCH = 'Ui/SEARCH';

  constructor(private store: Store<any>) {}

  search(query) {
    this.store.dispatch({
      type: UiActions.SEARCH,
      payload: query,
    });
  }

}
