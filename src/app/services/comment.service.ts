import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ModelComments } from './models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  
  httpHeaders = new HttpHeaders().set(
    'authorization',
    JSON.parse(localStorage.getItem('user')!).token
    );
    // .set('Content-Type', 'application/json'););

  url = environment.baseUrl+ '/post';

  constructor(private httpClient: HttpClient) {}

  postComment(id: number, comment: string) {
    return this.httpClient.post(this.url+ `/${id}/comment`, comment, {
      headers: this.httpHeaders,
    });
  }

  getComments(id : number) {
    return this.httpClient.get<ModelComments>(this.url+ `/${id}/comment`);
  }

  deleteComment(id: number, commentId: number) {
    return this.httpClient.delete<ModelComments>(this.url + `/${id}/comment/${commentId}`, {
      headers: this.httpHeaders,
    });
  }

}