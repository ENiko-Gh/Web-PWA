import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Alerta_Stock {
  @PrimaryGeneratedColumn()
  id_alerta: number;

  @Column()
  id_producto: number;

  @Column()
  nivel_minimo: number;

  @Column()
  estado: boolean;

  @Column()
  fecha_creacion: Date;
}
