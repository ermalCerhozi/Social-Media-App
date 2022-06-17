import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/services/models/post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  currentUser: UserModel = JSON.parse(localStorage.getItem('user')!);

  ngOnInit(): void {
    let id= this.route.snapshot.paramMap.get('id');
  }
}
