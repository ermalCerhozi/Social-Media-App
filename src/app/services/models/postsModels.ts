export interface modelPosts {
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
