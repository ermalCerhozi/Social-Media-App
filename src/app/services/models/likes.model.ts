export interface modelVotes {
  data: {
    list: [
      {
        id: 0;
        vote: 0;
        user: {};
        post: {
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
          votes: ['string'];
        };
      }
    ];
    pageNo: 0;
    pageSize: 0;
    totalElements: 0;
  };
  result: {};
}
