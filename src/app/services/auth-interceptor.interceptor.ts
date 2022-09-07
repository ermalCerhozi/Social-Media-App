import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  
  constructor(private router: Router) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token')!;
    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', token),
      });
    } else {
      this.router.navigate(['/login']);
    }
    return next.handle(request);
  }
}
