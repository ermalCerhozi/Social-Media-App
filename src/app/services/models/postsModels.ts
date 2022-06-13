export interface ModelPosts {
  data: {
    list: [
      {
        id: number;
        imageUrl: string;
        description: string;
        noComment: true;
        comments: [
          {
            id: number;
            comment: string;
            post: string;
            user: {};
          }
        ];
        user: {};
        votes: [
          {
            id: number;
            vote: number;
            user: {};
            post: string;
          }
        ];
      }
    ];
    pageNo: number;
    pageSize: number;
    totalElements: number;
  };
  result: {};
}

export interface ModelPost {
  id: number;
  imageUrl: string;
  description: string;
  noComment: true;
  comments: [
    {
      id: number;
      comment: string;
      post: string;
      user: {};
    }
  ];
  user: { email: string; firstName: string; id: number; lastName: string };
  votes: [
    {
      id: number;
      vote: number;
      user: {};
      post: string;
    }
  ];
}
