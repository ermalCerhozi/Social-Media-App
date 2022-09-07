import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Role } from 'src/app/services/interfaces/enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  hide: boolean = true;
  form = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router,  private toast: NgToastService) {}

  onSubmit(loginForm: NgForm) {
    this.authService
      .logIn(loginForm.value)
      .pipe(tap((res) => {
        if (res.data.role == Role.USER) {
          this.router.navigate(['navigate/home']);
        } else {
          this.router.navigate(['navigate/admin']);
        }  
            localStorage.setItem('user', JSON.stringify(res.data));
            this.toast.success({
              detail: 'SUCCESS',
              summary: "You're logged in",
              duration: 2500,
            });
          },
          (error) => {
            this.toast.error({
              detail: 'ERROR',
              summary: 'Email or password incorrect.',
              duration: 3000,
            });
          })).subscribe();
  }
}
