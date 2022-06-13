import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

export interface likesList {
  firstName: string;
  lastName: string;
  email: string;
}

let ELEMENT_DATA: likesList[] = [
  {firstName:'ermal',lastName:'cerhozi',email:'ermal.cerhozi@gmail.com'},
  {firstName:'endri',lastName:'cerhozi',email:'endri.cerhozi@gmail.com'},
  {firstName:'armend',lastName:'cerhozi',email:'armend.cerhozi@gmail.com'}
];

@Component({
  selector: 'app-likes-list',
  templateUrl: './likes-list.component.html',
  styleUrls: ['./likes-list.component.css']
})
export class LikesListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  isLoadingResults = true;
  ngUnsub = new Subject();  

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
