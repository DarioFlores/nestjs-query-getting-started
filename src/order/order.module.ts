import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { OrderEntity } from './order.entity';
import { OrderDto } from './dto/order.dto';
import { OrderInputDto } from './dto/order.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([OrderEntity])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: OrderDto,
          CreateDTOClass: OrderInputDto,
          EntityClass: OrderEntity,
        },
      ],
    }),
  ],
})
export class OrderModule {}
