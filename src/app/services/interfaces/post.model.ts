import { CommentEntity } from "./comment.model";
import { VoteEntity } from "./vote.model";

export interface Post {
  id: number;
  imageUrl: string;
  description: string;
  noComment: true;
}

export interface PageOf<MODEL> {
  list: MODEL;
  pageNo: number;
  pageSize: number;
  totalElements: number;
}

export interface PostEntity<MODEL> {
  id: number;
  imageUrl: string;
  description: string;
  noComment: boolean;
  comments: CommentEntity[];
  user: MODEL;
  votes: VoteEntity[];
}

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  role: string;
}

export class PostClass implements PostEntity<UserModel> {
  id = 1;
  imageUrl = '';
  description = '';
  noComment = false;
  comments = [];
  user = {
    id: 1,
    firstName: '',
    lastName: '',
    email: '',
    token: '',
    role: '',
  };
  votes = [];
}



export interface EntirePost {
  data: {
    list: {
        id: number,
        imageUrl: string,
        description: string,
        noComment: boolean,
        comments: {
            id: number,
            comment: string,
            post: string,
            user: {  
              id: number;
              firstName: string;
              lastName: string;
              email: string;
              token: string;
              role: string;
            }
          },
        user: {  
          id: number;
          firstName: string;
          lastName: string;
          email: string;
          token: string;
          role: string;
        }
        votes: {
            id: number,
            vote: number,
            user: {  
              id: number;
              firstName: string;
              lastName: string;
              email: string;
              token: string;
              role: string;
            }
            post: string;
          }
      },
    pageNo: number,
    pageSize: number,
    totalElements: number
  },
  result: {}
}