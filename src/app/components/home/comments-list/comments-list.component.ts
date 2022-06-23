import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CommentService } from 'src/app/services/comment.service';
import { UserModel } from 'src/app/services/models/post.model';
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
    private postService: PostService, private commentService : CommentService
  ) {}


  ngOnInit(): void {
    this.getComments();
    console.log("hapet");
  }
  
  getComments(){
    this.loadedComments= this.post.comments;
    console.log(this.loadedComments);
  }

  deleteComment(commentId: number) {
    this.commentService.deleteComment(this.post.id, commentId)
    .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
        this.getComments();
      });
  }
}
