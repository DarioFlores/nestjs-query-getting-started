import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { ClientEntity } from './client.entity';
import { ClientDto } from './dto/client.dto';
import { ClientInputDto } from './dto/client.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([ClientEntity])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: ClientDto,
          CreateDTOClass: ClientInputDto,
          EntityClass: ClientEntity,
        },
      ],
    }),
  ],
})
export class ClientModule {}
