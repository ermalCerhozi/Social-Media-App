import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PageOf, PostEntity, UserModel } from 'src/app/services/interfaces/post.model';
import { ResponseModel } from '../services/interfaces/response.model';
import { PostService } from '../services/post.service';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  userId = this.route.snapshot.paramMap.get('id')!;
  currentUser: UserModel = JSON.parse(localStorage.getItem('user')!);
  loadedPosts: PostEntity<UserModel>[] = [];

  constructor(private route: ActivatedRoute, private postService: PostService, public dialog: MatDialog) {  }

  ngOnInit(): void {
    this.getPosts();   
    this.getUser();
    console.log();
  }

  getPosts() {
    this.postService
      .getPosts()
      .subscribe((res: ResponseModel<PageOf<PostEntity<UserModel>[]>>) => {
        this.loadedPosts = res.data.list.filter(item => item.user.id === +this.userId);
        console.log(this.loadedPosts);
      });
  }

  getUser(){
    // this.loadedPosts
  }

  openDialog(post: PostEntity<UserModel>){
    this.dialog.open(PostDialogComponent, {
      data: post
    });
  }
  

}
