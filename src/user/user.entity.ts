import { ClientEntity } from '../client/client.entity';
import { OneToMany } from 'typeorm';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  roles?: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({ name: 'client_account', nullable: true })
  clientAccount?: string;

  @Column({ type: 'timestamp', name: 'last_login', nullable: true })
  lastLogin?: Date;

  @OneToMany(
    () => ClientEntity,
    clients => clients.user,
  )
  clients!: ClientEntity[];

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
