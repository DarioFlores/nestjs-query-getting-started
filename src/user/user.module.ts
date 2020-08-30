import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserDto } from './dto/user.dto';
import { UserInput } from './dto/user.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([UserEntity])],
      // describe the resolvers you want to expose
      resolvers: [{ 
        DTOClass: UserDto, 
        CreateDTOClass: UserInput,
        EntityClass: UserEntity 
      }],
    }),
  ],
})
export class TodoItemModule {}