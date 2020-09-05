import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ClientEntity } from '../client/client.entity';
import { OrderPackageEntity } from '../order-package/order-package.entity';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  requestId?: string;

  @Column({ nullable: true })
  delay?: number;

  @Column({ nullable: true })
  duration?: number;

  @Column({ nullable: true })
  accidentalDeliveryDuration?: number;

  @Column({ type: 'float' })
  ordPrice: number;

  @Column({ type: 'timestamp', name: 'start_time', nullable: true })
  startTime?: Date;

  @Column({ type: 'timestamp', name: 'end_time', nullable: true })
  endTime?: Date;

  // packages:
  // client:
  @ManyToOne(
    () => ClientEntity,
    client => client.orders,
    { onDelete: 'CASCADE', nullable: false },
  )
  @JoinColumn()
  client: ClientEntity;

  @OneToMany(
    () => OrderPackageEntity,
    packages => packages.order,
  )
  packages!: OrderPackageEntity[];
}
