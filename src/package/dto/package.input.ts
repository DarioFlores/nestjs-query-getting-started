import { InputType, Field } from '@nestjs/graphql';
import { GraphQLFloat } from 'graphql';

@InputType('PackageInput')
export class PackageInputDto {
  @Field({
    description: `Represents the package name`,
  })
  name: string;

  @Field({
    description: `Represents package code`,
  })
  code: string;

  @Field({
    description: `Represents package description`,
    nullable: true,
  })
  description?: string;

  @Field(() => GraphQLFloat, {
    description: `Represents package price`,
  })
  price: number;

  @Field(() => GraphQLFloat, {
    description: `Coefficient between 0 and 1 for the calculation of prices`,
  })
  coef: number;

  @Field({
    description: `Represents the QR Code`,
    nullable: true,
  })
  qrCode?: string;

  @Field({
    description: `Represents the status of the package`,
    nullable: true,
  })
  state?: string;
}
