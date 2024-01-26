import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { Post } from './post.entity';
import { PostsService } from './posts.service';
import { CreatePostInput } from './dtos/create-post.input';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query((returns) => [Post])
  async posts(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Mutation((returns) => Post)
  async createPost(
    @Args('postInput') postInput: CreatePostInput,
  ): Promise<Post> {
    return this.postsService.create(postInput);
  }
}
