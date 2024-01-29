import { Resolver, Mutation, Query, Args, Int } from '@nestjs/graphql';
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

  @Query((returns) => Post)
  async post(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.postsService.findOneById(id);
  }

  @Mutation((returns) => Post)
  async createPost(
    @Args('postInput') postInput: CreatePostInput,
  ): Promise<Post> {
    return this.postsService.create(postInput);
  }
}
