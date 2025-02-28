import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
  ) {}

  async crear(rol: Rol): Promise<Rol> {
    return this.rolRepository.save(rol);
  }

  async encontrarUno(id_rol: number): Promise<Rol> {
    return this.rolRepository.findOne(id_rol);
  }

  async encontrarTodos(): Promise<Rol[]> {
    return this.rolRepository.find();
  }

  async actualizar(id_rol: number, rol: Rol): Promise<Rol> {
    await this.rolRepository.update(id_rol, rol);
    return this.encontrarUno(id_rol);
  }

  async eliminar(id_rol: number): Promise<void> {
    await this.rolRepository.delete(id_rol);
  }
}
