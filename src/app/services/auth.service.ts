import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";


interface ResponseModel<MODEL> {
  data: MODEL;
  result: any;
}

interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  role: string;
}

interface AuthModel {
  email: string;
  password: string;
}

interface SignUpModel extends AuthModel{
  firstName: string;
  lastName: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.baseUrl + '/auth';
  }

  signIn(authModel: AuthModel): Observable<ResponseModel<UserModel>> {
    return this.httpClient
      .post<ResponseModel<UserModel>>(this.url+'/signIn', authModel)
      .pipe
      (tap(res => localStorage.setItem('token', res.data.token)));
  }

  signUp(signUpModel: SignUpModel): Observable<ResponseModel<UserModel>> {
      return this.httpClient.post<ResponseModel<UserModel>>(this.url+'/signUp', signUpModel)
      .pipe
      (tap(res => localStorage.setItem('token', res.data.token)));
  }

}