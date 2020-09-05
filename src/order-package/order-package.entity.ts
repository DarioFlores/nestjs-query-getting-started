import { OrderEntity } from '../order/order.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PackageEntity } from '../package/package.entity';

@Entity('order-package')
export class OrderPackageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  quantity?: number;

  @Column({ type: 'float', nullable: true })
  ordPackagePrice?: number;

  @ManyToOne(
    () => OrderEntity,
    order => order.packages,
    { onDelete: 'CASCADE', nullable: false },
  )
  @JoinColumn()
  order: OrderEntity;

  @ManyToOne(
    () => PackageEntity,
    td => td.orders,
    { onDelete: 'CASCADE', nullable: false },
  )
  @JoinColumn()
  package: PackageEntity;
}
