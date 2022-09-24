import { Post } from "../repositories/interfaces/IPostRepository";
import { PostRepository } from "../repositories/PostRepository";
import { IPostService } from "./interfaces/IPostService";

export class PostService implements IPostService {
  postRepository: PostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  async getPosts(): Promise<[] | Post[]> {
    return await this.postRepository.getPosts();
  }

  async getPostById(id: number): Promise<Post | null> {
    return await this.postRepository.getPostById(id);
  }
}
