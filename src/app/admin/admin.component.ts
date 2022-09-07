// https://material.angular.io/components/table/examples#table-overview
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostService } from '../services/post.service';
import { take } from 'rxjs/operators';
import { ConfirmDialogService } from '../services/confirm-dialog.service';
import { Router } from '@angular/router';


export interface Posts {
  postId: number;
  firstName: string;
  lastName: string;
  description: string;
  image: string;
  userId: number;
}

let ELEMENT_DATA: Posts[] = [];

 @Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'image', 'description', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  isLoadingResults = true;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private postService: PostService, private confirmDialogService: ConfirmDialogService,private router: Router) {  }

   ngOnInit(): void {
     this.getPosts();
   }

   getPosts() { 
    this.postService.getPosts()
      .subscribe(res => {
        ELEMENT_DATA = [];
        res.data.list.forEach(data => {
          ELEMENT_DATA.push({
            postId: data.id,
            firstName: data.user.firstName,
            lastName: data.user.lastName,
            description: data.description,
            image: data.imageUrl,
            userId: data.user.id
          });
        });
        this.dataSource = new MatTableDataSource(ELEMENT_DATA); 
        this.isLoadingResults = false;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }

    onDelete(i: number){
      this.postService.deletePosts(ELEMENT_DATA[i].userId)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(ELEMENT_DATA[i].userId);
        this.isLoadingResults = true;
        this.getPosts();
      });
    }

    // onEdit(id: number){ }
    
    onView(i: number){ 
      this.router.navigate(['navigate/profile/', ELEMENT_DATA[i].userId]);
    }

    // [routerLink]="['profile']"
    confirm(i : number) {
        this.confirmDialogService
          .confirmDialog({
            title: 'Confirm',
            message: 'Are you sure you want to delete this post?',
            confirmCaption: 'Yes',
            cancelCaption: 'No',
          })
          .subscribe((confirmed) => {
            if (confirmed){
              this.onDelete(i);
              console.log('The user confirmed the action');
            } 
          });
    } 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}