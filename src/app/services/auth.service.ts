import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponseModel, UserModel } from './models/post.model';

interface SignInModel {
  email: string;
  password: string;
}

interface SignUpModel extends SignInModel {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string;

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {
    this.url = environment.baseUrl + '/auth';
  }

  signIn(authModel: SignInModel): Observable<ResponseModel<UserModel>> {
    return this.httpClient.post<ResponseModel<UserModel>>(
      this.url + '/signIn',
      authModel
    );
  }

  signUp(signUpModel: SignUpModel): Observable<ResponseModel<UserModel>> {
    return this.httpClient.post<ResponseModel<UserModel>>(
      this.url + '/signUp',
      signUpModel
    );
  }
}
