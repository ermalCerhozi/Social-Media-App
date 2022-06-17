import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import {
  CommentModel,
  Post,
  PostEntity,
  UserModel,
} from 'src/app/services/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css'],
})
export class CommentsListComponent implements OnInit {
  currentUser: UserModel = JSON.parse(localStorage.getItem('user')!);

  loadedComments: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public post: any,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.getComments();
  }
  
  getComments(){
    this.loadedComments= this.post.comments;
  }

  deleteComment(commentId: number) {
    this.postService.deleteComment(this.post.id, commentId);
  }
}
