import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from '../src/user/user.module';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
import { UserEntity } from '../src/user/user.entity';
import { getRepository } from 'typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'test-e2e',
          entities: ['./**/*.entity.ts'],
          synchronize: true,
        }),
        GraphQLModule.forRoot({
          // set to true to automatically generate schema
          autoSchemaFile: true,
        }),
        UserModule,
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Debe PASAR cuando intente CREAR un User con los campos opcionales', async () => {
    const { body, status } = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `mutation{ createOneUser(input:{ user:{ email: "darioexequiel22@gmail.com" username: "dario321" roles: "das" lastLogin: "2011-10-05T14:48:00.000Z" clientAccount: "client"} }){ id roles email username lastLogin clientAccount} }`,
      });

    expect(status).toEqual(200);
    const [db] = await getRepository(UserEntity).find();
    if (body.errors) {
      expect(body.errors).toEqual([]);
    }
    expect(body).toEqual({
      data: {
        createOneUser: {
          id: db.id,
          roles: db.roles,
          email: db.email,
          username: db.username,
          lastLogin: db.lastLogin.toISOString(),
          clientAccount: db.clientAccount,
        },
      },
    });
  });

  it('Debe PASAR cuando intente CREAR un User sin los campos opcionales', async () => {
    const { body, status } = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `mutation{ createOneUser(input:{ user:{ email: "dario_flores321@hotmail.com" username: "dario321" roles: "das"} }){ id roles email username lastLogin clientAccount} }`,
      });

    expect(status).toEqual(200);
    const db = await getRepository(UserEntity).findOne({
      where: {
        email: 'dario_flores321@hotmail.com',
      },
    });
    if (body.errors) {
      expect(body.errors).toEqual([]);
    }
    expect(body).toEqual({
      data: {
        createOneUser: {
          id: db.id,
          roles: db.roles,
          email: db.email,
          username: db.username,
          lastLogin: db.lastLogin,
          clientAccount: db.clientAccount,
        },
      },
    });
  });

  it('Debe LANZAR un ERROR cuando se intenta CREAR un User sin el campo obligatorio roles', async () => {
    const { body } = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query:
          'mutation{ createOneUser(input:{ user:{ email: "darioexequiel22@gmail.com" username: "dario321" lastLogin: "2011-10-05T14:48:00.000Z" clientAccount: "client"} }){ id roles email username lastLogin clientAccount} }',
      })
      .expect(400);

    expect(body.errors[0].message).toEqual(
      'Field "UserInput.roles" of required type "String!" was not provided.',
    );
    expect(body.errors[0].extensions.code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  it('Debe LANZAR un ERROR cuando se intenta CREAR un User sin el campo obligatorio email', async () => {
    const { body } = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query:
          'mutation{ createOneUser(input:{ user:{ username: "dario321" roles: "das" lastLogin: "2011-10-05T14:48:00.000Z" clientAccount: "client"} }){ id roles email username lastLogin clientAccount} }',
      })
      .expect(400);

    expect(body.errors[0].message).toEqual(
      'Field "UserInput.email" of required type "String!" was not provided.',
    );
    expect(body.errors[0].extensions.code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  it('Debe LANZAR un ERROR cuando se intenta CREAR un User sin el campo obligatorio username', async () => {
    const { body } = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query:
          'mutation{ createOneUser(input:{ user:{ email: "darioexequiel22@gmail.com" roles: "das" lastLogin: "2011-10-05T14:48:00.000Z" clientAccount: "client"} }){ id roles email username lastLogin clientAccount} }',
      })
      .expect(400);

    expect(body.errors[0].message).toEqual(
      'Field "UserInput.username" of required type "String!" was not provided.',
    );
    expect(body.errors[0].extensions.code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  afterAll(async () => {
    await getRepository(UserEntity).query(`DELETE FROM user;`);
    await app.close();
  });
});
