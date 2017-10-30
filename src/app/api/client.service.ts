import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {

  BASE_URL = '//jsonplaceholder.typicode.com';

  constructor(private http: Http) { }

  get(url) {
    return this.http.get(`${this.BASE_URL}${url}`)
      .map(response => response.json());
  }

  put() {}
  post() {}
  delete() {}
}
