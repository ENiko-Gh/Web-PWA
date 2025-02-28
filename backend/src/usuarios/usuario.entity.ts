import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Empresa } from '../empresas/empresa.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nombre_completo: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefono: string;

  @Column()
  estado: boolean;

  @Column()
  fecha_creacion: Date;

  @Column({ nullable: true })
  ultima_conexion: Date;

  @Column()
  password_hash: string;

  @ManyToOne(() => Empresa)
  @JoinColumn({ name: 'id_empresa' })
  empresa: Empresa;
}