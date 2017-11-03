import { Injectable } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/pluck';
import { PostsService } from '../posts/posts.service';

const filteredPostsSelector = createSelector([
  state => (state as any).posts,
  state => (state as any).ui.query,
], (posts, query) => {
  return PostsService.filterPosts(posts, query);
});

@Injectable()
export class Selectors {

  posts$: Observable<any[]>;
  query$: Observable<''>;
  filteredPosts$: Observable<any[]>;

  constructor(
    private store: Store<any>,
    private postsService: PostsService,
  ) {
    this.posts$ = store.select('posts');
    this.query$ = store.select('ui').pluck('query');

    this.filteredPosts$ = store.select(filteredPostsSelector);
  }

}
