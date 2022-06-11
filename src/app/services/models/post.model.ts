export interface Post {
    id: number;
    imageUrl: string;
    description: string;
    noComment: true;
}

export interface PostCreate{
    imageUrl: string;
    description: string;
    noComment: true;
}
