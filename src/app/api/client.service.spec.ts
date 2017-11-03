import { ClientService } from './client.service';
import { Observable } from 'rxjs';

const mockHttp: any = {
  get: null,
};

fdescribe('ClientService', () => {
  let clientService;

  beforeEach(() => {
    clientService = new ClientService(mockHttp);
  });

  it('should get posts', () => {
    const spy = spyOn(mockHttp, 'get')
      .and.returnValue(Observable.of({
        json: () => 'MOCK DATA',
      }));

    clientService.get('/endpoint')
      .subscribe((result) => {
        expect(spy.calls.count()).toBe(1);
        expect(spy.calls.first().args)
          .toEqual(['//jsonplaceholder.typicode.com/endpoint']);
        expect(result).toBe('MOCK DATA');
      });
  });

  it('should foo', () => {
    return clientService.foo()
      .then((result) => {
        expect(result).toBe('FOO');
      });
  });
});
