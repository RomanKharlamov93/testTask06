import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {UserPayload} from '../../user';

@Injectable()

export class UserService {

  constructor(private http: HttpClient) { }

  userLogin(user: UserPayload): Observable<any> {
    return this.http.post<any>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user);
  }
}
