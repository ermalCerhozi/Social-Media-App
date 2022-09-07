import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';
import { take } from 'rxjs/operators';
import {
  PostEntity,
  UserModel,
} from 'src/app/services/interfaces/post.model';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPostsComponent implements OnInit {
  currentUser: UserModel = JSON.parse(localStorage.getItem('user')!);

  editedPost!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public post: PostEntity<UserModel>,private postService: PostService, private fb: FormBuilder) 
  {
    this.editedPost = this.fb.group({
      imageUrl: ["", [Validators.required]],
      description: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {   
    this.editedPost.setValue({
      imageUrl: this.post.imageUrl,
      description: this.post.description,
    })
  }

  onSubmit() {
    if(!this.editedPost.valid) return
    this.post.description = this.editedPost.value.description;
    this.post.imageUrl = this.editedPost.value.imageUrl;
    this.postService.editPosts(this.post)
  }
}
