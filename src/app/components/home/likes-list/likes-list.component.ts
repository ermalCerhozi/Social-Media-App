import { Component, OnInit } from '@angular/core';


export interface likesList {
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: likesList[] = [
  { firstName: 'Ermal', lastName: 'cerhozi', email: 'ec#gmail.com'},
  { firstName: 'Ermal', lastName: 'cerhozi', email: 'ec#gmail.com'},
  { firstName: 'Ermal', lastName: 'cerhozi', email: 'ec#gmail.com'},
  { firstName: 'Ermal', lastName: 'cerhozi', email: 'ec#gmail.com'},
  { firstName: 'Ermal', lastName: 'cerhozi', email: 'ec#gmail.com'},
  { firstName: 'Ermal', lastName: 'cerhozi', email: 'ec#gmail.com'},
];

@Component({
  selector: 'app-likes-list',
  templateUrl: './likes-list.component.html',
  styleUrls: ['./likes-list.component.css']
})
export class LikesListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  dataSource = ELEMENT_DATA;

  // loadedLikes : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
