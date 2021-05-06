import {Injectable, NgZone} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {StorageProvider} from './storage-provider';
import {Observable} from 'rxjs';

@Injectable()

export class UserInterceptor implements HttpInterceptor {
  constructor(
    private ngZone: NgZone,
    private router: Router,
    private storageProvider: StorageProvider
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.storageProvider.get('user');

    if (user && user.token)
  }
}
