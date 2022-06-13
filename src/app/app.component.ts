import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from './services/models/comments.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogProject';

  constructor(private router: Router){}

}