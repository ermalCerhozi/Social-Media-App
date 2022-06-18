import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';
import { take } from 'rxjs/operators';
import {
  Post,
  PostEntity,
  UserModel,
} from 'src/app/services/models/post.model';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPostsComponent implements OnInit {
  currentUser: UserModel = JSON.parse(localStorage.getItem('user')!);

  editPostForm! : FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public post: PostEntity<UserModel>,
    private postService: PostService, private fb: FormBuilder
  ) {}

  ngOnInit(): void {   
    console.log(this.post);
    this.editPostForm = this.fb.group({
      description: ["", [Validators.required]],
    });
  }

  editPost() {
    console.log(this.editPostForm.value, this.post.id);
    this.postService.editPosts(this.post.id, this.editPostForm.value)
    .pipe(take(1))
    .subscribe((res) => console.log(res));
  }
}
