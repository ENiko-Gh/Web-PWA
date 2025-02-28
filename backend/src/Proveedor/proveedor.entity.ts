import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  id_proveedor: number;

  @Column()
  nombre: string;

  @Column()
  contacto: string;

  @Column()
  telefono: string;

  @Column()
  email: string;

  @Column()
  direccion: string;

  @Column()
  fecha_creacion: Date;
}
