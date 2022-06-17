import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap,take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';

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

  constructor(private authService: AuthService, private router: Router,     private toast: NgToastService) {}

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm) {
    this.authService
      .signIn(loginForm.value)
      .pipe(tap(
        (res) => {
          localStorage.setItem('user', JSON.stringify(res.data));
          this.router.navigate(['navigate/home']);
          this.toast.success({detail:"SUCCESS",summary:"You're logged in",duration: 1500})
        },
        (error) => {
          this.toast.error({detail:"ERROR",summary:"Email or password incorrect.",duration: 1500})
        }
      )).subscribe();
  }
}
