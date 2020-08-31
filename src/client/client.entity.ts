import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { OrderEntity } from '../order/order.entity';
import { JoinColumn, ManyToOne } from 'typeorm';

@Entity('client')
export class ClientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ name: 'price_disc' })
  priceDisc: number;

  @Column({ name: 'cust_rule', nullable: true })
  custRule?: string;

  @ManyToOne(
    () => UserEntity,
    user => user.clients,
    { onDelete: 'CASCADE', nullable: false },
  )
  @JoinColumn()
  user: UserEntity;

  @OneToMany(
    () => OrderEntity,
    user => user.client,
  )
  orders!: OrderEntity[];

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
