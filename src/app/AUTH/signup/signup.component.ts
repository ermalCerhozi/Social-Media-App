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
import { passwordValidator } from './validators/passwordValidator';

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
      password: ["", [Validators.required, passwordValidator(/^(?=.*d)(?=.*[a-zA-Z]).{8,16}$/)]],    });
  }

  signUp() {
    this.authService.signUp(this.signUpForm.value)
    .subscribe(
      (res) => {
        this.router.navigate(['/home']);
        localStorage.setItem('user', JSON.stringify(res.data));
      },
      (error) => {
            this.toast.error({detail:"ERROR",summary:"Double check your credentials.",duration: 3000})
          }
        )
        this.signUpForm.reset();
    }

}
