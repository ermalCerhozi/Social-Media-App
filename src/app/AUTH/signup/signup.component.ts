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
  signUpForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private toast: NgToastService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm =  this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  signUp() {
    this.authService.signUp(this.signUpForm.value)
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
