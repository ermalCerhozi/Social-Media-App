import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide: boolean = true;
  email: string;
  password: string;
  signInForm: FormGroup = new FormGroup({});
  errorMessage: string = '';

  constructor(private authService: AuthService) {
    // constructor(private fb: FormBuilder) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  signIn() {
    console.log(this.signInForm.value);
    this.authService
      .signIn({
        email: this.signInForm.value.email,
        password: this.signInForm.value.password,
      })
      .pipe(
        tap(
          (res) => {},
          (error) => {
            const errorList = error.error.message;
            this.errorMessage = errorList;
          }
        )
      )
      .subscribe();
  } // loginForm.resetForm();

}

