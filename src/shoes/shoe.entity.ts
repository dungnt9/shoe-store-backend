import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shoe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ default: 0 })
  stock: number;

  @Column()
  imageUrl: string;

  @Column('text', { nullable: true })
  description: string;

  @Column({ default: true })
  isAvailable: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
