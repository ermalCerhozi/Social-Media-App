import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './interfaces/post.model';
import { ResponseModel } from './interfaces/response.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

interface LogInModel {
  email: string;
  password: string;
}

interface SignUpModel extends LogInModel {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.baseUrl + '/auth';

  constructor(private httpClient: HttpClient, private router : Router) {}

  logIn(logIn: LogInModel): Observable<ResponseModel<UserModel>> {
    return this.httpClient.post<ResponseModel<UserModel>>(
      this.url + '/signIn', logIn)
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.data.token);
        })
      );
  }

  signUp(signUp: SignUpModel): Observable<ResponseModel<UserModel>> {
    return this.httpClient.post<ResponseModel<UserModel>>(this.url + '/signUp', signUp)
    .pipe(tap((res) => localStorage.setItem('token', res.data.token)));
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
  
  isAdmin() {
    return JSON.parse(localStorage.getItem('user')!).role == '9';
  }
}
