import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({});
  // secondSignUpForm: FormGroup = new FormGroup({}); 
  hide: boolean = true;
  errorMessage = '';
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor( private fb: FormBuilder, private authService: AuthService) {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
    });

  }

  signUp() {
    console.log(this.signUpForm.value);
    this.authService
      .signUp({
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
      })
      .pipe(
        tap(
          (_res) => {},
          (error) => {
            console.log(error.error.message);
            this.errorMessage =  error.error.message;
          }
          )
      )
      .subscribe();
  }
}
