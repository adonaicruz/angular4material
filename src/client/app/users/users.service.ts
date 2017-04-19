import { Injectable } from '@angular/core';
import { User } from './user';
import 'rxjs/add/operator/toPromise';


import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UsersService {

  users: any[];
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getAll(): Promise<User[]> {
    return this.http.get('api/users')
              .toPromise()
              .then(response => response.json().data as User[])
              .catch(this.handleError);
  }

  search(term: string): Observable<User[]> {
    return this.http.get(`app/users/?name=${term}`)
               .toPromise()
              .then(response => response.json().data as User[])
              .catch(this.handleError);
  }
  
  get(id: number): Promise<User> {
    const url = `api/users/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
         response.json().data as User;
      })
      .catch(this.handleError);
  }

  getByLogin(login: string,password: string): Promise<User> {
    const url = `api/users/?login=^${login}$&password=^${password}$`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
         return response.json().data as User;
      })
      .catch(this.handleError);
  }
  
  create(data: User): Promise<User> {
    console.log(JSON.stringify(data));
    return this.http
      .post('api/users/', JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }

}
