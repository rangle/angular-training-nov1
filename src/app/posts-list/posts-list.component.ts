import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import { Selectors } from '../ngrx/selectors';
import { UiActions, PostsActions } from '../ngrx/actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  styles: [`
    ::ng-deep .foo { color: #001B44; }
  `]
})
export class PostsListComponent implements OnInit, OnDestroy {

  query: string = '';
  subscription: any;
  constructor(
    private postsService: PostsService,
    private selectors: Selectors,
    private uiActions: UiActions,
    private postsActions: PostsActions,
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('PostsListComponent destroyed');
  }

}
