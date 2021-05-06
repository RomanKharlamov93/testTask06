import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {UserPayload} from '../../user';
import {tap} from 'rxjs/operators';

@Injectable()

export class UserService {

  constructor(private http: HttpClient) { }

  public userLogin(user: UserPayload): Observable<any> {
    return this.http.post<any>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      );
  }

  private setToken(response): void {
    if (response) {
      const expDate = new Date( new Date().getTime() + +response.expiresIn * 1000);

      localStorage.setItem('fb-token-exp', expDate.toString());
      localStorage.setItem('fb-token', response.idToken);
    } else {
      localStorage.clear();
    }
  }

  public logout(): void {
    this.setToken(null);
  }

  private get token(): void | string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));

    if (new Date > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }
}
