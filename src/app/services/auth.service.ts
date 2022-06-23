import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponseModel, UserModel } from './models/post.model';

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

  constructor(private httpClient: HttpClient) {}

  logIn(logIn: LogInModel): Observable<ResponseModel<UserModel>> {
    return this.httpClient.post<ResponseModel<UserModel>>(
      this.url + '/signIn', logIn
    );
  }


  signUp(signUp: SignUpModel): Observable<ResponseModel<UserModel>> {
    return this.httpClient.post<ResponseModel<UserModel>>(
      this.url + '/signUp', signUp
    );
  }
}
