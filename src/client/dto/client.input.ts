import { Field, InputType, ID } from '@nestjs/graphql';
import { UserInput } from '../../user/dto/user.input';
import {
  IsDefined,
  IsNotEmpty,
  IsString,
  Length,
  IsNumber,
  IsOptional,
} from 'class-validator';

@InputType('ClientInput')
export class ClientInputDto {
  @Field({
    description: `Represents the client's name`,
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field({
    description: `Represents the client's code`,
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(0, 2)
  code: string;

  @Field({
    description: 'Represents the discount price',
    nullable: false,
  })
  @IsDefined()
  @IsNumber()
  priceDisc: number;

  @Field({
    description: 'Define customize rules based on regex',
    deprecationReason: 'Not useful in v2 schema',
    nullable: true,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  custRule?: string;

  @Field(() => ID)
  user: UserInput;
}
