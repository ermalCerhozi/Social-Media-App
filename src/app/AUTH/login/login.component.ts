import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) {
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
    this.authService
      .signIn({
        email: this.signInForm.value.email,
        password: this.signInForm.value.password,
      })
      .pipe(
        tap(
          (res) => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('role', res.data.role);
            this.router.navigate(['']);
          },
          (error) => {
            const errorList = error.error.message;
            this.errorMessage = errorList;
          }
        )
      )
      .subscribe();
  }

}

