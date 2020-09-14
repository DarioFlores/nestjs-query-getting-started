import { Field, InputType } from '@nestjs/graphql';
import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsEmail,
  IsOptional,
  IsDate,
  Length,
} from 'class-validator';

@InputType('UserInput')
export class UserInput {
  @Field({
    description: 'Represents the collection of roles',
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  roles?: string;

  @Field({
    description: 'Represents the email',
    nullable: false,
  })
  @IsDefined()
  @IsEmail()
  email: string;

  @Field({
    description: 'Represents the user name',
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  username: string;

  @Field({
    description: 'Represents the last access',
    deprecationReason: 'Not useful in v2 schema',
    nullable: true,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  lastLogin?: Date;

  @Field({
    description: 'Represents the last access',
    deprecationReason: 'Not useful in v2 schema',
    nullable: true,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  clientAccount?: string;
}
