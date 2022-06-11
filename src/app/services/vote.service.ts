import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  url = environment.baseUrl;

  httpHeaders = new HttpHeaders().set(
    'authorization',
    localStorage.getItem('token')!
  );
  // .set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  postVote(commentData: { comment: 'string'; postId: number }) {}

  patchVote(id : number) {}

}
