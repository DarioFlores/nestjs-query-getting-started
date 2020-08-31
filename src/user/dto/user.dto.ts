import { ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { FilterableField, Relation } from '@nestjs-query/query-graphql';
import { ClientDto } from '../../client/dto/client.dto';
import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsEmail,
  IsOptional,
  IsDateString,
  Length,
  IsUUID,
} from 'class-validator';

@ObjectType('User')
@Relation('clients', () => [ClientDto], { nullable: true })
export class UserDto {
  @FilterableField()
  id: string;

  @FilterableField({
    description: 'Represents the collection of roles',
    nullable: true,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  roles?: string;

  @FilterableField({
    description: 'Represents the email',
    nullable: true,
  })
  @IsDefined()
  @IsEmail()
  email!: string;

  @FilterableField({
    description: 'Represents the user name',
    nullable: true,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  username!: string;

  @FilterableField({
    description: 'Represents the last access',
    deprecationReason: 'Not useful in v2 schema',
    nullable: true,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  lastLogin?: Date;

  @FilterableField({
    description: 'Represents the last access',
    deprecationReason: 'Not useful in v2 schema',
    nullable: true,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  clientAccount?: string;

  @FilterableField({
    nullable: true,
  })
  @IsUUID()
  clientId!: string;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}
