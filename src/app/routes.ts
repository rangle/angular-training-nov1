import { Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ExperimentsComponent } from './experiments/experiments.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PostsListComponent },
  { path: 'posts/:uid', component: PostDetailsComponent },
  { path: 'experiments', component: ExperimentsComponent }
];
