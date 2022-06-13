import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';
import { take } from 'rxjs/operators';
import { Post } from 'src/app/services/models/post.model';
import { ModelPost, ModelPosts } from 'src/app/services/models/postsModels';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPostsComponent implements OnInit {


  postForm = new FormGroup({
    imageUrl: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: ModelPost, private postService: PostService) {}

  ngOnInit(): void {
    // this.editPost(this.id);
    console.log(this.data);
    
  }

  editPost(id: number, description:string) {
    this.postService
      .editPosts(id, description)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
