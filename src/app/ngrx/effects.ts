import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { PostsActions } from './actions';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class Effects {

  @Effect() fetchPosts$: Observable<any> = this.actions$
    .ofType(PostsActions.FETCH.POSTS)
    .switchMap(action =>
      this.postsService.getPosts()
        .map(posts => ({
          type: PostsActions.FETCH.SUCCESS,
          payload: posts,
        }))
        .startWith({ type: PostsActions.FETCH.STARTED }) .catch(error => of({
          type: PostsActions.FETCH.FALED,
          payload: error.message,
        }))
    );

  constructor(
    private postsService: PostsService,
    private actions$: Actions
  ) {}
}
