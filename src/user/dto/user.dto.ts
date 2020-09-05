import { ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableConnection,
} from '@nestjs-query/query-graphql';
import { ClientDto } from '../../client/dto/client.dto';

@ObjectType('User')
@FilterableConnection('clients', () => ClientDto, { nullable: true })
export class UserDto {
  @FilterableField()
  id: string;

  @FilterableField({
    description: 'Represents the collection of roles',
    nullable: true,
  })
  roles?: string;

  @FilterableField({
    description: 'Represents the email',
    nullable: true,
  })
  email!: string;

  @FilterableField({
    description: 'Represents the user name',
    nullable: true,
  })
  username!: string;

  @FilterableField({
    description: 'Represents the last access',
    deprecationReason: 'Not useful in v2 schema',
    nullable: true,
  })
  lastLogin?: Date;

  @FilterableField({
    description: 'Represents the last access',
    deprecationReason: 'Not useful in v2 schema',
    nullable: true,
  })
  clientAccount?: string;
}
