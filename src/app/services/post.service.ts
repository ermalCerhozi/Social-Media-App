import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  CommentModel,
  PageOf,
  Post,
  PostEntity,
  ResponseModel,
  UserModel,
} from './models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = environment.baseUrl + '/post';

  httpHeaders = new HttpHeaders()
    .set('authorization', JSON.parse(localStorage.getItem('user')!).token)
    .set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  createPosts(postData: {
    description: string;
    imageUrl: string;
    noComment: boolean;
  }) {
    return this.httpClient.post(this.url, postData, {
      headers: this.httpHeaders,
    });
  }

  getPosts() {
    return this.httpClient.get<ResponseModel<PageOf<PostEntity<Post>[]>>>(
      this.url,{ headers: this.httpHeaders });
  }

  editPosts(id: number, description: string) {
    return this.httpClient
    .put<PostEntity<UserModel>>(this.url + `/${id}`, description, {
      headers: this.httpHeaders,
    })
  }
  
  deletePosts(id: number) {
    return this.httpClient.delete<ResponseModel<PageOf<PostEntity<Post>>>>(this.url + `/${id}`, {
      headers: this.httpHeaders,
    });
  }
  
  postComment(id: number, comment: string) {
    return this.httpClient.post(this.url + `/${id}/comment`, comment, {
      headers: this.httpHeaders,
    });
  }

  deleteComment(id: number, commentId: number) {
    return this.httpClient
      .delete<ResponseModel<PageOf<PostEntity<CommentModel>[]>>>(
        this.url + `/${id}/comment/${commentId}`,
        { headers: this.httpHeaders }
      )
  }
}
