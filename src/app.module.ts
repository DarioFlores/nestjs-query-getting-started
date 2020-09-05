import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { OrderModule } from './order/order.module';
import { PackageModule } from './package/package.module';
import { OrderPackageModule } from './order-package/order-package.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      // set to true to automatically generate schema
      autoSchemaFile: true,
    }),
    UserModule,
    ClientModule,
    OrderModule,
    PackageModule,
    OrderPackageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
