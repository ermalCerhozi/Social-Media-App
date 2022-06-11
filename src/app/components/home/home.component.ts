import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';
import { CommentContent } from '../../services/models/comment.model';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { LikesListComponent } from './likes-list/likes-list.component';
import { Post, PostCreate } from '../../services/models/post.model';
import { UpdatePostsComponent } from './edit-post/edit-posts.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loadedPosts: Post[] = [];

  postForm: FormGroup= new FormGroup({});
  

  constructor( private postService: PostService, private dialog :MatDialog) {}

  ngOnInit(): void {
    this.getPosts();
  }

  createPost(postData: PostCreate) {
    this.postForm.reset()
    this.postService
      .createPosts(postData)
      .pipe(take(1))
      .subscribe((res) => {
        this.getPosts();
      });
  }

  getPosts() {
    this.postService
      .getPosts()
      .pipe(take(1))
      .subscribe((res) => {
        this.loadedPosts = res.data.list.reverse();
      });
  }

  deletePost(id: number) {
    this.postService
      .deletePosts(id)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
        this.getPosts();
      });
  }

  editPost(id: number) {
    this.postService
      .editPosts(id)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
        this.getPosts();
      });
  }

  createComment(){ }

  getComment(){};

  deleteComment(){};

  openEditPostDialog(){
    let dialogRef = this.dialog.open(UpdatePostsComponent,{panelClass: 'my-class'} );
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog Result ${result}`)
    })
  }

  openLikesListDialog(){
    let dialogRef = this.dialog.open(LikesListComponent, {panelClass: 'my-class'});
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog Result ${result}`)
    })
  }

  openCommentsListDialog(){
    let dialogRef = this.dialog.open(CommentsListComponent, {panelClass: 'my-class'});
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog Result ${result}`)
    })
  }

}
