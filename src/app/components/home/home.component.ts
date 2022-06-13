import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { LikesListComponent } from './likes-list/likes-list.component';
import { Post, PostCreate } from '../../services/models/post.model';
import { EditPostsComponent } from './edit-post/edit-posts.component';
import { CommentService } from 'src/app/services/comment.service';
import { user } from 'src/app/services/models/comments.model';
import { ModelPost, ModelPosts } from 'src/app/services/models/postsModels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loadedPosts: Post[] = [];
  postForm: FormGroup= new FormGroup({});
  commentForm: FormGroup= new FormGroup({});
  likeUp= false;

  currentUser: user = JSON.parse(localStorage.getItem('user')!)

  constructor( private postService: PostService, private dialog :MatDialog, private commentService: CommentService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  createPost(postData: PostCreate) {
    this.postService
    .createPosts(postData)
    .pipe(take(1))
    .subscribe((res) => {
      this.getPosts();
    });
    this.postForm.reset()
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


  createComment(id: number, comment: string){
    this.commentService.postComment(id,comment)
    .pipe(take(1))
    .subscribe();
   }


  openEditPostDialog(data: ModelPost){
    let dialogRef = this.dialog.open(EditPostsComponent,{data} );
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog Result ${result}`)
    })
  }

  openLikesListDialog(id : number){
    let dialogRef = this.dialog.open(LikesListComponent, {panelClass: 'my-class'});
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog Result ${result}`)
    })
  }

  openCommentsListDialog(data: any){
    let dialogRef = this.dialog.open(CommentsListComponent, {data});
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog Result ${result}`)
    })
  }

  voteUp(){
    this.likeUp= !this.likeUp;
  }
}
