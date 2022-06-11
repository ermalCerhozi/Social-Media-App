import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = environment.baseUrl;

  httpHeaders = new HttpHeaders().set(
    'authorization',
    localStorage.getItem('token')!
  );
  // .set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  
  postComment(commentData: { comment: 'string'; postId: number }) {}

  getComments(id : number) {}

  deleteComment(id: number) {}

}
