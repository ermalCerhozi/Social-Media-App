import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post, postPatch } from './models/post.model';
import { ModelPosts } from './models/postsModels';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = environment.baseUrl+'/post';

  httpHeaders = new HttpHeaders().set(
    'authorization',
    JSON.parse(localStorage.getItem('user')!).token
  );
  // .set('Content-Type', 'application/json');

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
    return this.httpClient.get<ModelPosts>(this.url, {
      headers: this.httpHeaders,
    });
  }

  deletePosts(id: number) {
    return this.httpClient.delete<ModelPosts>(this.url + `/${id}`, {
      headers: this.httpHeaders,
    });
  }

  editPosts(id: number, description: string) {
    return this.httpClient.put<Post>(
      this.url + `/${id}`, description, { headers: this.httpHeaders }
    ); 
  }

}
