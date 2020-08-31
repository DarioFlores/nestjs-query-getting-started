import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { PackageEntity } from './package.entity';
import { PackageDto } from './dto/package.dto';
import { PackageInputDto } from './dto/package.input';

@Module({
    imports: [
      NestjsQueryGraphQLModule.forFeature({
        // import the NestjsQueryTypeOrmModule to register the entity with typeorm
        // and provide a QueryService
        imports: [NestjsQueryTypeOrmModule.forFeature([PackageEntity])],
        // describe the resolvers you want to expose
        resolvers: [
          {
            DTOClass: PackageDto,
            CreateDTOClass: PackageInputDto,
            EntityClass: PackageEntity,
          },
        ],
      }),
    ],
  })
export class PackageModule {}
