import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reporte {
  @PrimaryGeneratedColumn()
  id_reporte: number;

  @Column()
  id_empresa: number;

  @Column()
  tipo: string;

  @Column()
  fecha_generacion: Date;

  @Column()
  archivo_pdf: string;

  @Column()
  id_usuario: number;
}
