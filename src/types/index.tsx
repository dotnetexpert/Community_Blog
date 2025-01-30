//User
export interface User {
  id: string;
  username: string;
  avatar?: string;
}

//Comment
export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  replies?: Comment[];
  parentId?: string;
}

//Post
export interface Post {
  id: string;
  title: string;
  content: string;
  image: string;
  author: User;
  createdAt: string;
  comments: Comment[];
}
