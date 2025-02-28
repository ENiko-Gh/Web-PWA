import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  id_inventario: number;

  @Column()
  id_empresa: number;

  @Column()
  fecha_actualizacion: Date;
}
