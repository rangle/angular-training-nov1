import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  styles: [`
    ::ng-deep .foo { color: tomato; }
  `]
})
export class PostsListComponent implements OnInit, OnDestroy {

  query: string = 'this is the search query';
  subscription: any;
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.subscription = this.postsService.posts$
      .subscribe(() => {});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('PostsListComponent destroyed');
  }

}
