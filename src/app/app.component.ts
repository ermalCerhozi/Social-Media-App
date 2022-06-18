import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogProject';

  form = new FormGroup({
    description: new FormControl('',Validators.required),
    imageUrl: new FormControl('',Validators.required)
  })

  createPost(){
    
  }
  constructor(private router: Router){}


  get description(){
    return this.form.get('description');
  }
  get imageUrl(){
    return this.form.get('imageUrl');
  }
}
