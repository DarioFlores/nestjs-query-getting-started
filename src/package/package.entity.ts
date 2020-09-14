import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderPackageEntity } from '../order-package/order-package.entity';

@Entity('package')
export class PackageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'float' })
  coef: number;

  @Column({ nullable: true })
  qrCode?: string;

  @Column({ nullable: true })
  state?: string;

  @OneToMany(
    () => OrderPackageEntity,
    orders => orders.package,
  )
  orders!: OrderPackageEntity[];
}
