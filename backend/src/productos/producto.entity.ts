import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id_producto: number;

  @Column()
  codigo_barras: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  id_categoria: number;

  @Column()
  precio_compra: number;

  @Column()
  precio_venta: number;

  @Column()
  stock_minimo: number;

  @Column()
  stock_maximo: number;

  @Column()
  id_empresa: number;

  @Column()
  id_proveedor: number;

  @Column()
  fecha_creacion: Date;

  @Column()
  ultima_actualizacion: Date;
}
