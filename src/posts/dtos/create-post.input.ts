import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

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

  @MaxLength(400)
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  content?: string;
}
