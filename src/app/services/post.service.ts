import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './../models/posts';

@Injectable()
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts/";

  constructor(private _http: Http) { }

  getAllPosts(filter?): Observable<Post[]> {
    let url = this.url;
    if (filter && filter.userId) {
      url += '?userId=' + filter.userId;
    }
    return this._http.get(url).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  getPostComments(id): Observable<any> {
    return this._http.get(this.url + id + '/comments').map(res => res.json());
  }

}
