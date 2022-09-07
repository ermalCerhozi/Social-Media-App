import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/services/interfaces/post.model';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public post: any) {}

  ngOnInit(): void {}

}
