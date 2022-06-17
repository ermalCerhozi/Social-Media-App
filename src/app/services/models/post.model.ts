export interface Post {
  id: number;
  imageUrl: string;
  description: string;
  noComment: true;
}

export interface ResponseModel<MODEL> {
  data: MODEL;
  result: any;
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
  comments: CommentModel[];
  user: MODEL;
  votes: VoteModel[];
}

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  role: string;
}

export interface VoteModel {
  id: number;
  vote: number;
  user: UserModel;
  post: PostEntity<UserModel>;
}

export interface CommentModel {
  id: number;
  comment: string;
  post: PostEntity<UserModel>;
  user: UserModel;
}

// export interface Omit {
//  commnet :string;
// }
