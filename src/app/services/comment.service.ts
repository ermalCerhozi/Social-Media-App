import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  httpHeaders = new HttpHeaders()
  .set('authorization',JSON.parse(localStorage.getItem('user')!).token
  ).set('Content-Type', 'application/json');

  url = environment.baseUrl + '/post';

  constructor(private httpClient: HttpClient) {}

  postComment(id: number, comment: string) {
    return this.httpClient.post(this.url + `/${id}/comment`, comment, {
      headers: this.httpHeaders,
    });
  }

  deleteComment(id: number, commentId: number) {
    return this.httpClient
      .delete(
        this.url + `/${id}/comment/${commentId}`,
        { headers: this.httpHeaders }
      );
  }
}