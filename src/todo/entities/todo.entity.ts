import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {

  @Field()
  _id: string;

  @Field()
  todoText: string

  @Field()
  completed: boolean

  @Field()
  createdAt: Date

}
