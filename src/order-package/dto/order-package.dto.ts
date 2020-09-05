import { OrderDto } from '../../order/dto/order.dto';
import { ObjectType, Int } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { GraphQLFloat } from 'graphql';
import { PackageDto } from '../../package/dto/package.dto';

@ObjectType('OrderPackage')
@FilterableRelation('order', () => OrderDto)
@FilterableRelation('package', () => PackageDto)
export class OrderPackageDto {
  @FilterableField()
  id: string;

  @FilterableField(() => Int, {
    description: `Represents the delay`,
    nullable: true,
  })
  quantity?: number;

  @FilterableField(() => GraphQLFloat, {
    description: `The final price of an order based on distance, size, and number of packages`,
    nullable: true,
  })
  ordPackagePrice?: number;
}
