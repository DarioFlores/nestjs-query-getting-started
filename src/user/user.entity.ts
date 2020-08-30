import { ClientEntity } from '../client/client.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  ObjectType,
  JoinColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: true})
  roles?: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({name: 'client_account', nullable: true})
  clientAccount?: string;

  @Column({type: 'timestamp', name: 'last_login', nullable: true})
  lastLogin?: Date;

  @ManyToOne(
    (): ObjectType<ClientEntity> => ClientEntity,
    client => client.users,
    { onDelete: 'CASCADE', nullable: true },
  )
  @JoinColumn()
  client: ClientEntity;

  
  @CreateDateColumn({type: 'timestamp', name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type: 'timestamp', name: 'updated_at'})
  updatedAt: Date;
}
