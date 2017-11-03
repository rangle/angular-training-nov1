import { Action } from '@ngrx/store';
import { UiActions, PostsActions } from './actions';

/**
 * Posts Reducer
 */
const postsIntialState = [];

export class UPDATE implements Action {
  readonly type = PostsActions.FETCH.SUCCESS;

  constructor(public payload: any[]) {}
}

export class LIKE implements Action {
  readonly type = PostsActions.FETCH.SUCCESS;

  constructor(public payload: number) {}
}

export type POSTS_ACTIONS = UPDATE;

export function postsReducer(state: any = postsIntialState, action: POSTS_ACTIONS) {
  switch (action.type) {
    case PostsActions.FETCH.SUCCESS:
      return [ ... action.payload ];

    case PostsActions.LIKE:
      return state.map(post => {
        if(post.id === action.payload) {
          return { ...post, likeCount: post.likeCount + 1 };
        }

        return post;
      });

    default:
      return state;
  }
}

/**
 * UI Reducer
 */
const uiIntialState = {
  query: ''
};

export class SEARCH implements Action {
  readonly type = UiActions.SEARCH;

  constructor(public payload: string) {}
}

export type UI_ACTIONS = SEARCH;

export function uiReducer(state: any = uiIntialState, action: UI_ACTIONS) {
  switch (action.type) {
    case UiActions.SEARCH:
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

/**
 * Root Reducer
 */
export const rootReducer = {
  ui: uiReducer,
  posts: postsReducer,
};
