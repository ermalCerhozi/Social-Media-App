export interface Post {
  id: number;
  imageUrl: string;
  description: string;
  noComment: true;
}

export interface PostCreate {
  imageUrl: string;
  description: string;
  noComment: true;
}

export interface postPatch {
  id: 0;
  imageUrl: 'string';
  description: 'string';
  noComment: true;
  comments: [
    {
      id: 0;
      comment: 'string';
      post: 'string';
      user: {};
    }
  ];
  user: {};
  votes: [
    {
      id: 0;
      vote: 0;
      user: {};
      post: 'string';
    }
  ];
}
