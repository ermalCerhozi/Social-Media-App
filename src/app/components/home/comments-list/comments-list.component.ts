import {  Component , OnInit } from '@angular/core';
import { CommentContent } from '../../../services/models/comment.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  loadedComments: CommentContent[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
