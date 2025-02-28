import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id_pedido: number;

  @Column()
  id_empresa: number;

  @Column()
  fecha_solicitud: Date;

  @Column()
  fecha_entrega: Date;

  @Column()
  estado: string;
}
