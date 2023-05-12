import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {


  @Field()
  todoText: string

  @Field()
  completed: boolean

}
