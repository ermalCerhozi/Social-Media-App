import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { LikesListComponent } from './likes-list/likes-list.component';
import { CommentModel, Post, PostEntity, UserModel } from '../../services/models/post.model';
import { EditPostsComponent } from './edit-post/edit-posts.component';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loadedPosts: PostEntity<Post>[] = [];

  postForm!: FormGroup;
  commentForm!: FormGroup;
  likeUp = false;

  currentUser: UserModel = JSON.parse(localStorage.getItem('user')!);

  constructor(private postService: PostService, private commentService: CommentService, private dialog: MatDialog, private fb : FormBuilder) {}

  ngOnInit(): void {
    this.getPosts();
    this.postForm = this.fb.group({
      description: ["", [Validators.required]],
      imageUrl: ["", Validators.required],
    }),
    this.commentForm = this.fb.group({
      comment: ["", Validators.required],
    })
  }

  createPost() {
    this.postService.createPosts(this.postForm.value)
      .pipe(take(1))
      .subscribe((res) => {
        this.getPosts();
      });
    this.postForm.reset();
  }

  getPosts() {
    this.postService.getPosts()
      .pipe(take(1))
      .subscribe((res) => {
        this.loadedPosts = res.data.list.reverse();
      });
  }

  deletePost(id: number) {
    this.postService.deletePosts(id)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
        this.getPosts();
      });
  }

  createComment(id: number ) {
    this.commentService.postComment(id, this.commentForm.value)
    .pipe(take(1))
    .subscribe((res) =>{
      this.getPosts();
    });
    this.commentForm.reset();
  }

  voteUp() {
    this.likeUp = !this.likeUp;
  }

  openEditPostDialog(data: PostEntity<Post>) {
    let dialogRef = this.dialog.open(EditPostsComponent, {data, panelClass: 'my-class',});
    dialogRef.afterClosed()
    .subscribe((res) => {
      this.getPosts();
    });
  }

  openLikesListDialog(id: number) {
    let dialogRef = this.dialog.open(LikesListComponent,{panelClass:'my-class',});
    dialogRef.afterClosed()
    .subscribe((res) => {
      console.log(`Dialog Result ${res}`);
    });
  }

  openCommentsListDialog(data: PostEntity<CommentModel>) {
    let dialogRef = this.dialog.open(CommentsListComponent, {data,panelClass:'my-class',});
    dialogRef.afterClosed()
    .subscribe((res) => {
      this.getPosts();
    });
  }
}
