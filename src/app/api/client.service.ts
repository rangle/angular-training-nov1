import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ClientService {

  BASE_URL = '//jsonplaceholder.typicode.com';

  constructor(private http: Http) { }

  get(url) {
    return this.http.get(`${this.BASE_URL}${url}`)
      .map(response => response.json())
      .catch(error => {
        console.warn(error.status);
        return Observable.throw(error);
      })
  }

  put() {}
  post() {}
  delete() {}
}
