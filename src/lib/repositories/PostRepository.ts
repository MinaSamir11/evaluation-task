import post from "../../redux/reducers/post";
import { getPostById, posts } from "../queries";
import apolloClient from "../MakeApolloClient";

import {
  IPostRepository,
  Post,
  PostConnection,
} from "./interfaces/IPostRepository";
import { ApolloQueryResult, gql } from "@apollo/client";

const qrPosts = gql`
  ${posts}
`;

const qrPostById = gql`
  ${getPostById}
`;

type PostsResult = {
  posts: PostConnection;
};

type PostDetailsResult = {
  post: Post;
};

export class PostRepository implements IPostRepository {
  async getPosts(): Promise<[] | Post[]> {
    const postsResponse: ApolloQueryResult<PostsResult> =
      await apolloClient.query({
        query: qrPosts,
        variables: {},
      });

    return postsResponse?.data?.posts?.nodes ?? [];
  }

  async getPostById(id: number): Promise<Post | null> {
    const postResponse: ApolloQueryResult<PostDetailsResult> =
      await apolloClient.query({
        query: qrPostById,
        variables: {
          id,
        },
      });
    return postResponse?.data.post;
  }
}
