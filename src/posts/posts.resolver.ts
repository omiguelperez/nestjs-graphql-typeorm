import {
  Resolver,
  Mutation,
  Query,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Post } from './post.entity';
import { PostsService } from './posts.service';
import { CreatePostInput } from './dtos/create-post.input';
import { Author } from 'src/authors/entities/author.entity';

@Resolver(() => Post)
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

  @ResolveField((returns) => Author)
  author(@Parent() parent: Post): Promise<Author> {
    return this.postsService.getAuthor(parent.authorId);
  }

  @Mutation((returns) => Post)
  async createPost(
    @Args('postInput') postInput: CreatePostInput,
  ): Promise<Post> {
    return this.postsService.create(postInput);
  }
}
