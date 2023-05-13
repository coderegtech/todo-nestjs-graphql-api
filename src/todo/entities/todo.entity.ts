import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {

  @Field()
  id: string;

  @Field()
  todoText: string

  @Field()
  completed: boolean

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

}
