import { Post } from "../../lib/repositories/interfaces/IPostRepository";
import {
  SET_POST_DETAILS,
  GET_POSTS_LIST,
  SET_IS_LOADING_POST,
  CommentConnection,
  User,
} from "../actions/types";

export type PostState = {
  postList: Array<Post>;
  postDetails: Post | null;
  isLoading: boolean;
};

export const initialState: PostState = {
  postList: [],
  postDetails: null,
  isLoading: false,
};

export default (state: PostState = initialState, action: any) => {
  switch (action.type) {
    case GET_POSTS_LIST:
      return {
        ...state,
        postList: action.payload,
      };

    case SET_POST_DETAILS:
      return {
        ...state,
        postDetails: action.payload,
      };

    case SET_IS_LOADING_POST:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
