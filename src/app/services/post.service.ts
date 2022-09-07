import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  EntirePost,
  PageOf,
  Post,
  PostEntity,
} from './interfaces/post.model';
import { ResponseModel } from './interfaces/response.model';
import { UserModel } from './interfaces/user.model';
import { tap } from 'rxjs';


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
    return this.httpClient.post<Post>(this.url, postData, {
      headers: this.httpHeaders,
    });
  }

  getPosts() {
    return this.httpClient
    .get<ResponseModel<PageOf<PostEntity<UserModel>[]>>>
    (this.url,{ headers: this.httpHeaders })
    .pipe(
      tap((resp) => {
        // this.sortPostsPipe.transform(resp.data.list);  
      })
    );
  }


  editPosts(request: PostEntity<UserModel>) {
    return this.httpClient
      .put<PostEntity<UserModel>>(this.url + `/${request.id}`, request)
      .subscribe((res) => console.log(res));
  }
  
  deletePosts(id: number) {
    return this.httpClient.delete<ResponseModel<PageOf<PostEntity<Post>>>>(this.url + `/${id}`, {
      headers: this.httpHeaders,
    });
  }
}
