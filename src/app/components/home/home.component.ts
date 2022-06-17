import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { LikesListComponent } from './likes-list/likes-list.component';
import { CommentModel, Post, PostEntity, UserModel } from '../../services/models/post.model';
import { EditPostsComponent } from './edit-post/edit-posts.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loadedPosts: PostEntity<Post>[] = [];

  postForm: FormGroup = new FormGroup({});
  commentForm: FormGroup = new FormGroup({});
  likeUp = false;

  currentUser: UserModel = JSON.parse(localStorage.getItem('user')!);

  constructor(private postService: PostService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPosts();
  }

  createPost(postData: Post) {
    this.postService.createPosts(postData);
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
        this.loadedPosts = res.data.list.reverse();
      });
  }

  deletePost(id: number) {
    this.postService.deletePosts(id);
    this.getPosts();
  }

  createComment(id: number, comment: string) {
    this.postService.postComment(id, comment).pipe(take(1)).subscribe();
  }

  voteUp() {
    this.likeUp = !this.likeUp;
  }

  openEditPostDialog(data: PostEntity<Post>) {
    let dialogRef = this.dialog.open(EditPostsComponent, {
      data,
      panelClass: 'my-class',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog Result ${result}`);
    });
  }

  openLikesListDialog(id: number) {
    let dialogRef = this.dialog.open(LikesListComponent, {
      panelClass: 'my-class',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog Result ${result}`);
    });
  }

  openCommentsListDialog(data: PostEntity<CommentModel>) {
    let dialogRef = this.dialog.open(CommentsListComponent, {
      data,
      panelClass: 'my-class',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog Result ${result}`);
    });
  }
}
