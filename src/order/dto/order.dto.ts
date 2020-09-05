import {
  FilterableField,
  FilterableConnection,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Int } from '@nestjs/graphql';
import { ClientDto } from '../../client/dto/client.dto';
import { GraphQLFloat } from 'graphql';
import { OrderPackageDto } from '../../order-package/dto/order-package.dto';

@ObjectType('Order')
@FilterableRelation('client', () => ClientDto)
@FilterableConnection('packages', () => OrderPackageDto)
export class OrderDto {
  @FilterableField()
  id: string;

  @FilterableField({
    description: `Represents the title of the order`,
  })
  title: string;

  @FilterableField({
    description: `Represents the description of the order`,
    nullable: true,
  })
  description?: string;

  @FilterableField({
    description: `Represents the request ID`,
    nullable: true,
  })
  requestId?: string;

  @FilterableField(() => Int, {
    description: `Represents the delay`,
    nullable: true,
  })
  delay?: number;

  @FilterableField(() => Int, {
    description: `Represents the duration`,
    nullable: true,
  })
  duration?: number;

  @FilterableField(() => Int, {
    description: `Represents the accidental delivery`,
    nullable: true,
  })
  accidentalDeliveryDuration: number;

  @FilterableField(() => GraphQLFloat, {
    description: `The final price of an order based on distance, size, and number of packages`,
  })
  ordPrice: number;

  @FilterableField(() => GraphQLISODateTime, {
    description: `Represents the time to start`,
    nullable: true,
  })
  startTime?: Date;

  @FilterableField(() => GraphQLISODateTime, {
    description: `Represents the time of ending`,
    nullable: true,
  })
  endTime?: Date;
}
