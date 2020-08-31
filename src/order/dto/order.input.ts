import { InputType, Field, ID, GraphQLISODateTime, Int } from '@nestjs/graphql';
import { ClientInputDto } from '../../client/dto/client.input';
import { GraphQLFloat } from 'graphql';
import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  Min,
  MaxLength,
} from 'class-validator';

@InputType('OrderInput')
export class OrderInputDto {
  @Field({
    description: `Represents the title of the order`,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  title: string;

  @Field({
    description: `Represents the description of the order`,
    nullable: true,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description?: string;

  @Field({
    description: `Represents the request ID`,
    nullable: true,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  requestId?: string;

  @Field(() => Int, {
    description: `Represents the delay`,
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  delay?: number;

  @Field(() => Int, {
    description: `Represents the duration`,
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  duration?: number;

  @Field(() => Int, {
    description: `Represents the accidental delivery`,
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  accidentalDeliveryDuration: number;

  @Field(() => GraphQLFloat, {
    description: `The final price of an order based on distance, size, and number of packages`,
  })
  @IsDefined()
  @IsNumber()
  @Min(0)
  ordPrice: number;

  @Field(() => GraphQLISODateTime, {
    description: `Represents the time to start`,
    nullable: true,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  startTime?: Date;

  @Field(() => GraphQLISODateTime, {
    description: `Represents the time of ending`,
    nullable: true,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  endTime?: Date;

  @Field(() => ID)
  client: ClientInputDto;
}
