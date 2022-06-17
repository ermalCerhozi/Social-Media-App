import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hide: boolean = true;
  signUpForm: FormGroup = new FormGroup({});
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router, private toast: NgToastService) {
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
    this.authService.signUp({
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
      })
      .pipe(
        tap(
          (res) => { 
            localStorage.setItem('user', JSON.stringify(res.data))
            this.router.navigate(['navigate/home']);
            this.toast.success({detail:"SUCCESS",summary:"Account created successfully.",duration: 1500})
          },
          (error) => {
            this.toast.error({detail:"ERROR",summary:"Double check your credentials.",duration: 1500})
          }
        )).subscribe();
    }
}
