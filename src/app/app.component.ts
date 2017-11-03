import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from './posts/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  timer: any;
  phoneNumber = '1234567890';

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    // this.timer = Observable.interval(500);
    this.postsService.getPosts();
    console.log('Component initialized');
  }

  handleScroll(pos) {
    console.log(pos);
  }

  ngOnDestroy() {
    console.log('Component destroyed');
  }

}
