import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap,take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;

  // error: any;

  form = {
    email: '',
    password: '',
  };
  errorMessage: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm) {
    this.authService
      .signIn(loginForm.value)
      .pipe(tap(
        (res) => {
          localStorage.setItem('user', JSON.stringify(res.data));
          this.router.navigate(['']);
        },
        (error) => {
          const errorList = error.error.message;
          this.errorMessage = errorList;
        }
      ), take(1)).subscribe();
  }
}
