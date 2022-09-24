import { Post } from "../../lib/repositories/interfaces/IPostRepository";

//POSTS
export const GET_POSTS_LIST = "GET_POSTS_LIST";
export const SET_POST_DETAILS = "SET_POST_DETAILS";
export const SET_IS_LOADING_POST = "SET_IS_LOADING_POST";

/** The connection type for comment. */
export type CommentConnection = {
  /** A list of nodes. */
  nodes?: Array<Comment>;
};

export type Comment = {
  body?: string;
  email?: string;
  id: number;
  name?: string;
  post: Post;
  postId: number;
};

export type User = {
  email: string;
  gender: string;
  id: number;
  name: string;
};
