import { Post } from "../../repositories/interfaces/IPostRepository";

export interface IPostService {
  getPosts(): Promise<Array<Post> | []>;
  getPostById(id: number): Promise<Post | null>;
}
