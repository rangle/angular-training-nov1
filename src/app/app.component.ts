import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  timer: any;
  phoneNumber = '1234567890';

  constructor() {
  }

  ngOnInit() {
    // this.timer = Observable.interval(500);

    console.log('Component initialized');
  }

  handleScroll(pos) {
    console.log(pos);
  }

  ngOnDestroy() {
    console.log('Component destroyed');
  }

}
