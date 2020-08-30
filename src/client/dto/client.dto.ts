import { ObjectType } from '@nestjs/graphql';
import { FilterableField, Relation } from '@nestjs-query/query-graphql';
import { UserDto } from '../../user/dto/user.dto';

@ObjectType('Client')
@Relation('users', () => [UserDto])
export class ClientDto {
  @FilterableField({
    nullable: true,
  })
  id: string;

  @FilterableField({
    description: `Represents the client's name`,
    nullable: true,
  })
  name: string;

  @FilterableField({
    description: `Represents the client's code`,
    nullable: true,
  })
  code: string;

  @FilterableField({
    description: 'Represents the discount price',
    nullable: true,
  })
  priceDisc: number;

  @FilterableField({
    description: 'Define customize rules based on regex',
    deprecationReason: 'Not useful in v2 schema',
    nullable: true,
  })
  custRule?: string;
}