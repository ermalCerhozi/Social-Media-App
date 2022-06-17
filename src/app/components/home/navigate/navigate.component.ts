import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/services/models/post.model';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit{

  constructor(private router :Router) { }

  ngOnInit(): void {
    
  }

  currentUser: UserModel = JSON.parse(localStorage.getItem('user')!)
  Logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }
}
