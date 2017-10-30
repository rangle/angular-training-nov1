import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  query: string = 'this is the search query';

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
  }

}
