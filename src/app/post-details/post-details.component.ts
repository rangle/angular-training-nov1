import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {

  subscription: any;
  post: any;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
  ) { }

  ngOnInit() {

    const id$: Observable<number> = this.route.params
      .map(params => parseInt(params.uid, 10));

    this.subscription = Observable.combineLatest(
      id$,
      this.postsService.posts$,
    ).subscribe(([id, posts]) => {
      this.post = posts.find(post => post.id === id);
    });

    this.subscription = Observable.combineLatest(
      id$,
      this.postsService.posts$,
    ).subscribe(([id, posts]) => {
      this.post = posts.find(post => post.id === id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
