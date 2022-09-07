import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/services/interfaces/post.model';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit{

  constructor(private router :Router, private authService: AuthService) { }
  isAdmin : boolean = false;

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin()
  }

  currentUser: UserModel = JSON.parse(localStorage.getItem('user')!)


  Logout(){
    this.authService.logout();
  }
}
