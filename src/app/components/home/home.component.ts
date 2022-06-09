import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators'
import { PostService } from 'src/app/services/post.service';
import { Post } from './post.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadedPosts : Post[] = [];

  constructor(private httpclient: HttpClient, private postService: PostService) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  createPost(){
    const body = {
      description: 'rjgvjhbsbkdhvbsojdl',
      imageUrl: 'https://www.facebook.com/images/fb_icon_325x325.png',
      noComment: true
    }
    this.postService.createPosts(body).pipe(take(1)).subscribe(res => {
      console.log(res);
      this.getPosts();
    })
  }

  getPosts(){
    this.postService.getPosts().pipe(take(1)).subscribe(res => {
      this.loadedPosts= res.data.list.reverse();
    })
  }

  deletePost(id: number){
    this.postService.deletePosts(id).pipe(take(1)).subscribe(res => {
      console.log(res);
      this.getPosts();
    })
  }


  }
