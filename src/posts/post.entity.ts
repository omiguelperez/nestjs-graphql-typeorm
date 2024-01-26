import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field((type) => Number)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  content: string;
}
