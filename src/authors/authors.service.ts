import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
import { Post } from 'src/posts/post.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const newAuthor = this.authorRepository.create(createAuthorInput);
    return this.authorRepository.save(newAuthor);
  }

  async findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async findOne(id: number): Promise<Author> {
    return this.authorRepository.findOneOrFail({
      where: { id },
    });
  }

  async update(
    id: number,
    updateAuthorInput: UpdateAuthorInput,
  ): Promise<Author> {
    const author = await this.findOne(id);
    return this.authorRepository.save({ ...author, ...updateAuthorInput });
  }

  async remove(id: number) {
    const author = await this.findOne(id);
    await this.authorRepository.remove(author);
  }
}
