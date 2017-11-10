import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/race';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/race';
import 'rxjs/add/operator/distinctUntilChanged';

enum ACTIVITY_STATE {
  PAUSED = 0,
  ACTIVE = 1,
}

@Injectable()
export class UserActivity {
  private pauseResume$: Observable<ACTIVITY_STATE>;
  private empty$ = Observable.empty();
  private activity$ = Observable.empty();

  constructor() {
    const mouse$ = Observable.fromEvent(document, 'mousemove');
    const touch$ = Observable.fromEvent(document, 'touchstart');
    this.activity$ = Observable.merge(mouse$, touch$);
  }

  timer(PAUSE_LIMIT) {
    return Observable.interval(PAUSE_LIMIT)
      .take(1)
      .mapTo(ACTIVITY_STATE.PAUSED);
  }

  pauseResume(PAUSE_LIMIT) {
    return this.activity$
      .mapTo(ACTIVITY_STATE.ACTIVE)
      .startWith(ACTIVITY_STATE.ACTIVE)
      .throttleTime(1000)
      .switchMap(() =>
        this.timer(PAUSE_LIMIT).startWith(ACTIVITY_STATE.ACTIVE),
      );
  }

  makePausable(obsv$, PAUSE_LIMIT = 5000) {
    return this.pauseResume(PAUSE_LIMIT)
      .distinctUntilChanged()
      .switchMap(
        state => (state === ACTIVITY_STATE.ACTIVE ? obsv$ : this.empty$),
      );
  }
}
