import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movimiento_Inventario {
  @PrimaryGeneratedColumn()
  id_movimiento: number;

  @Column()
  id_producto: number;

  @Column()
  tipo_movimiento: string;

  @Column()
  cantidad: number;

  @Column()
  fecha_movimiento: Date;

  @Column()
  motivo: string;

  @Column()
  id_usuario: number;

  @Column()
  costo_unitario: number;

  @Column()
  ubicacion: string;
}
