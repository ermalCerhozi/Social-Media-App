import { HttpClient } from '@angular/common/http';
import {  Component , Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from 'src/app/services/comment.service';
import { take } from 'rxjs/operators';
import { Comments } from 'src/app/services/models/comments.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  loadedComments: Comments[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private httpClient: HttpClient ,private commentService: CommentService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.getComment();
    
  }

  getComment(){
    this.commentService.getComments(this.data.id)
    .pipe(take(1))
    .subscribe((res) => {
      this.loadedComments = res.data.list.reverse();
      console.log(this.loadedComments)
    });
  }

  deleteComment(commentId: number){
    this.commentService
      .deleteComment(this.data.id, commentId)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
        this.getComment();
      });
  };


}
