import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Detalle_Pedido {
  @PrimaryGeneratedColumn()
  id_detalle_pedido: number;

  @Column()
  id_pedido: number;

  @Column()
  id_producto: number;

  @Column()
  cantidad: number;

  @Column()
  precio_unitario: number;
}
