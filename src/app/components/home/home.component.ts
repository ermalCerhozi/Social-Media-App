import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'

import { Post } from './post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // loadedPosts : Post[] = [];

  // constructor(public httpclient: HttpClient) { }

  ngOnInit(): void {
    // this.fetchPosts();
  }



  // onCreatePosts(postData : {tittle: string, content:string }){
  //   this.httpclient
  //     .post{
  //       '.', postData
  //     }
  //     .subscribe(responseData =>{
  //     console.log(responseData);
  //   });
  // }

  // onFetchPosts (){
  //   this.fetchPosts();
  // }


  // private fetchPosts (){
  //   this.httpclient
  //     .get<{ [key : string]: Post}>('.json')
  //     .pipe(
  //       map ( responseData => {
  //         const postsArray : Post[] = [];
  //         for (const key in responseData){
  //         postsArray.push({...responseData[key] , id:  key});
  //       }
  //       return postsArray;
  //     }))
  //     .subscribe(posts =>{
  //         this.loadedPosts = posts;
  //   });
  // }

}
