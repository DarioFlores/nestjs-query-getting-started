import { FilterableField, Relation } from '@nestjs-query/query-graphql';
import { GraphQLFloat } from 'graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderPackageDto } from '../../order-package/dto/order-package.dto';

@ObjectType('Package')
@Relation('orders', () => [OrderPackageDto])
export class PackageDto {
  @FilterableField()
  id: string;

  @FilterableField({
    description: `Represents the package name`,
  })
  name: string;

  @FilterableField({
    description: `Represents package code`,
  })
  code: string;

  @FilterableField({
    description: `Represents package description`,
    nullable: true,
  })
  description?: string;

  @FilterableField(
    () => GraphQLFloat, {
    description: `Represents package price`,
  })
  price: number;

  @FilterableField(
    () => GraphQLFloat, {
    description: `Coefficient between 0 and 1 for the calculation of prices`,
  })
  coef: number;

  @FilterableField({
    description: `Represents the QR Code`,
    nullable: true,
  })
  qrCode?: string;

  @FilterableField({
    description: `Represents the status of the package`,
    nullable: true,
  })
  state?: string;
}
