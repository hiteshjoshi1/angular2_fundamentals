import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

_url = 'https://jsonplaceholder.typicode.com/users';

_results;

  constructor(private _http: Http) { }

  getAllUsers() {
   return this._http.get(this._url).map(res => {
      // return res.json();
      return res.json();
    });
  }

  addUser(user):Observable<any> {
    return this._http.post(this._url, JSON.stringify(user)).map(res => res.json());
  }

  getUser(id) {
     return this._http.get(this._url+'/'+id).map(res => {
      return  res.json();
      });
  }
  updateUser(user, id){
    return this._http.put(this.getUserUrl(id), JSON.stringify(user))
		.map(res => res.json());
  }

  private getUserUrl(userId){
		return this._url + '/' + userId;
  }

  deleteUser(id){
  return this._http.delete(this.getUserUrl(id)).map(res => res.json());
}

}
