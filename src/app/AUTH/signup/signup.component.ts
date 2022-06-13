import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({});
  hide: boolean = true;
  errorMessage = '';
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  signUp() {
    this.authService
      .signUp({
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
      })
      .pipe(
        tap(
          (res) => { 
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('role', res.data.role);
            this.router.navigate(['']);
          },
          (error) => {
            console.log(error.error.message);
            this.errorMessage = error.error.message;
          }
        )
      )
      .subscribe((res) =>{
        localStorage.setItem('user', JSON.stringify(res.data))
        this.router.navigate(['']);
       });
  }
}
