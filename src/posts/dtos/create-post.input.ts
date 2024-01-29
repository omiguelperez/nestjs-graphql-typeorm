import { InputType, Field } from '@nestjs/graphql';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

@InputType()
export class CreatePostInput {
  @MaxLength(100, {
    message: 'Title is too long',
  })
  @IsNotEmpty({
    message: "Title can't be empty",
  })
  @IsString({
    message: 'Title is required',
  })
  @Field()
  title: string;

  @IsInt()
  @Field()
  authorId: number;

  @MaxLength(400)
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  content?: string;
}
