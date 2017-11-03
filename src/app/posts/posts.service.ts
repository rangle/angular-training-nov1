import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClientService } from '../api/client.service';

@Injectable()
export class PostsService {

  constructor(private clientService: ClientService) { }

  getPosts() {
    return this.clientService.get('/posts')
      .map(posts => this.normalizePosts(posts));
  }

  normalizePosts(posts) {
    return posts.map(post => Object.assign({}, post, {
      author: 'katherine grant',
      date: new Date(),
      likeCount: 0,
    }));
  }

  static filterPosts(posts = [], query = '') {
    return posts.filter(post => {
      return post.title
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  }
}
