import { CommentConnection, User } from "../../../redux/actions/types";

export type Post = {
  body: string;
  /** List of comments */
  comments: CommentConnection;
  id: number;
  title: string;
  user: User;
  userId: number;
};

export type PostConnection = {
  __typename?: "postConnection";
  /** A list of nodes. */
  nodes?: Array<Post>;
};

export interface IPostRepository {
  getPosts(): Promise<Array<Post> | []>;
  getPostById(id: number): Promise<Post | null>;
}
