import { PostsService } from './posts.service';
import { Observable } from 'rxjs';

const mockClientService: any = {
  get: null
};

const stubPosts = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repe',
    body: 'quia et suscipit',
  },
];

fdescribe('PostsService', () => {
  let postsService;

  beforeEach(() => {
    postsService = new PostsService(mockClientService);
  });

  it('should get posts', () => {
    const spy = spyOn(mockClientService, 'get')
      .and.returnValue(Observable.of(''));
    postsService.getPosts();

    expect(spy.calls.count()).toBe(1);
    expect(spy.calls.first().args).toEqual(['/posts']);
  });

  it('should normalize post list', () => {
    const result = postsService.normalizePosts(stubPosts);

    expect(result).toEqual([
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repe',
        body: 'quia et suscipit',
        author: 'katherine grant',
        date: new Date(),
        likeCount: 0,
      },
    ])
  });

  it('should filter posts', () => {
    expect(
      PostsService.filterPosts(stubPosts, '').length
    ).toBe(1);

    expect(
      PostsService.filterPosts(stubPosts, 'xxx').length
    ).toBe(0);

    expect(
      PostsService.filterPosts(stubPosts, 'sunt aut').length
    ).toBe(1);
  });
});
