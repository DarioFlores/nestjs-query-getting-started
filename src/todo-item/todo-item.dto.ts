import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field } from '@nestjs/graphql';

@ObjectType('TodoItem')
export class TodoItemDTO {
  @FilterableField({description: 'Id de la entidad'})
  id!: string;

  @FilterableField({description: 'Titulo de la tarea'})
  title!: string;

  @FilterableField({description: 'Estado de la tarea'})
  completed!: boolean;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
