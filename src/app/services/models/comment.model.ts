export interface ModelComments {
    data: {
      list: [
        {
          id: 0;
          comment: 'string';
          post: {
            id: 0;
            imageUrl: 'string';
            description: 'string';
            noComment: true;
            comments: ['string'];
            user: {};
            votes: [
              {
                id: 0;
                vote: 0;
                user: {};
                post: 'string';
              }
            ];
          };
          user: {};
        }
      ];
      pageNo: 0;
      pageSize: 0;
      totalElements: 0;
    };
    result: {};
  }
  
  export interface Comments {
    id: 0;
    comment: 'string';
  }
  