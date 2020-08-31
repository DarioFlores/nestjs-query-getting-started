import { Field, InputType, Int, ID } from '@nestjs/graphql';
import { GraphQLFloat } from 'graphql';
import { OrderInputDto } from '../../order/dto/order.input';
import { PackageInputDto } from '../../package/dto/package.input';

@InputType('OrderPackageInput')
export class OrderPackageInputDto {
  @Field(() => Int, {
    description: `Represents the delay`,
    nullable: true,
  })
  quantity?: number;

  @Field(() => GraphQLFloat, {
    description: `The final price of an order based on distance, size, and number of packages`,
    nullable: true,
  })
  ordPackagePrice?: number;

  @Field(() => ID)
  order: OrderInputDto;

  @Field(() => ID)
  package: PackageInputDto;
}
