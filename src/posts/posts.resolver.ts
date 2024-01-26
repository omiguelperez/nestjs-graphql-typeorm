import { Resolver, Query } from '@nestjs/graphql';
import { Post } from './post.entity';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query((returns) => [Post])
  async posts(): Promise<Post[]> {
    return this.postsService.findAll();
  }
}
