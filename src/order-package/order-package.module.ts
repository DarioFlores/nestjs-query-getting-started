import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { OrderPackageEntity } from './order-package.entity';
import { OrderPackageDto } from './dto/order-package.dto';
import { OrderPackageInputDto } from './dto/order-package.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([OrderPackageEntity])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: OrderPackageDto,
          CreateDTOClass: OrderPackageInputDto,
          EntityClass: OrderPackageEntity,
        },
      ],
    }),
  ],
})
export class OrderPackageModule {}
