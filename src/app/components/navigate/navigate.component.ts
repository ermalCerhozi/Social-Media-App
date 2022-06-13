import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/services/models/comments.model';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent {

  constructor(private router :Router) { }

  currentUser: user = JSON.parse(localStorage.getItem('user')!)
  Logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }
}
