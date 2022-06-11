import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { modelPosts } from './models/postsModels';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = environment.baseUrl;

  httpHeaders = new HttpHeaders().set(
    'authorization',
    localStorage.getItem('token')!
  );
  // .set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  createPosts(postData: {
    description: string;
    imageUrl: string;
    noComment: boolean;
  }) {
    return this.httpClient.post(this.url + '/post', postData, {
      headers: this.httpHeaders,
    });
  }

  getPosts() {
    return this.httpClient.get<modelPosts>(this.url + '/post', {
      headers: this.httpHeaders,
    });
  }

  deletePosts(id: number) {
    return this.httpClient.delete<modelPosts>(this.url + `/post/${id}`, {
      headers: this.httpHeaders,
    });
  }

  editPosts(id: number) {
    return this.httpClient.put<modelPosts>(
      this.url + `/post/${`id, imageUrl, description, noComment, comments`}`,
      { headers: this.httpHeaders }
    );
  }

}
