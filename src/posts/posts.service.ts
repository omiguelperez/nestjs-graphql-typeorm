import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  findAll(): Post[] {
    return [
      { id: 1, title: 'Hello ', content: 'Content 1' },
      { id: 2, title: 'Hello 2', content: 'Content 2' },
      { id: 3, title: 'Hello 3', content: 'Content 3' },
    ];
  }
}
