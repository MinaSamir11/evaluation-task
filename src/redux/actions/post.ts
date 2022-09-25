import {
  SET_POST_DETAILS,
  GET_POSTS_LIST,
  SET_IS_LOADING_POST,
} from "../actions/types";

import { Alert } from "react-native";
import { Post } from "../../lib/repositories/interfaces/IPostRepository";
import { PostService } from "../../lib/services/PostService";
import { AppDispatch } from "../store";
import { navigate } from "../../navigation";
import routNames from "../../navigation/routeNames";

const postService = new PostService();

export const setPostList = (posts: Array<Post | []>) => {
  return { type: GET_POSTS_LIST, payload: posts };
};

export const setPostDetails = (post: Post | null) => {
  return { type: SET_POST_DETAILS, payload: post };
};

export const setIsLoading = (isLoading: boolean) => {
  return { type: SET_IS_LOADING_POST, payload: isLoading };
};

export const fetchPostsList: any = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    try {
      dispatch(setIsLoading(true));
      const postsList: Post[] | [] = await postService.getPosts();
      console.log("postsList*****", postsList);
      dispatch(setPostList(postsList));
      dispatch(setIsLoading(false));
    } catch (err: any) {
      dispatch(setIsLoading(false));
      Alert.alert(err.errors[0].message);
    }
  };
};

export const fetchPostbyId: any = (postId: number) => {
  return async (dispatch: AppDispatch, getState: any) => {
    try {
      dispatch(setIsLoading(true));
      const postDetails: Post | null = await postService.getPostById(postId);
      dispatch(setPostDetails(postDetails));
      navigate(routNames.POST_DETAILS);
      dispatch(setIsLoading(false));
    } catch (err: any) {
      dispatch(setIsLoading(false));
      Alert.alert(err.errors[0].message);
    }
  };
};
