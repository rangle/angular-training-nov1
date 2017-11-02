import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClientService } from '../api/client.service';

@Injectable()
export class PostsService {

  private stateSubject = new BehaviorSubject({
    posts: [],
    query: '',
  });

  public state$ =
    this.stateSubject.publishReplay(1).refCount();
  public posts$ = this.state$.pluck('posts');
  public filteredPosts$ = this.state$
    .map(state =>  this.filterPosts(state.posts, state.query));

  constructor(private clientService: ClientService) { }

  getPosts() {
    this.clientService.get('/posts')
      .map(posts => this.normalizePosts(posts))
        .do(posts => {
          console.log(`Loaded ${posts.length} posts`);
        })
      .subscribe(posts => {
        this.stateSubject.next({ posts, query: '' });
      }, () => {
        console.log('Fetching posts failed');
      });
  }

  normalizePosts(posts) {
    return posts.map(post => Object.assign({}, post, {
      author: 'katherine grant',
      date: new Date(),
      likeCount: 0,
    }));
  }

  updateLike(id: number) {
    const state = this.stateSubject.getValue();
    const posts = state.posts;

    const idx = posts.findIndex((post) => post.id === id);
    posts[idx].likeCount++;

    this.stateSubject.next({
      posts: posts,
      query: ''
    });
  }

  updateQuery(query) {
    const posts = this.stateSubject.getValue().posts;

    this.stateSubject.next({
      posts: posts,
      query: query,
    });
  }

  filterPosts(posts = [], query = '') {
    return posts.filter(post => {
      return post.title
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  }
}
