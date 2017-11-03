import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Selectors } from '../ngrx/selectors';

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
    private selectors: Selectors,
  ) { }

  ngOnInit() {

    const id$: Observable<number> = this.route.params
      .map(params => parseInt(params.uid, 10));

    this.subscription = Observable.combineLatest(
      id$,
      this.selectors.posts$,
    ).subscribe(([id, posts]) => {
      this.post = posts.find(post => post.id === id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
