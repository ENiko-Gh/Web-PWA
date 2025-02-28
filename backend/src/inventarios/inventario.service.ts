import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventario } from './inventario.entity';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(Inventario)
    private inventarioRepository: Repository<Inventario>,
  ) {}

  async crear(inventario: Inventario): Promise<Inventario> {
    return this.inventarioRepository.save(inventario);
  }

  async encontrarUno(id_inventario: number): Promise<Inventario> {
    return this.inventarioRepository.findOne(id_inventario);
  }

  async encontrarTodos(): Promise<Inventario[]> {
    return this.inventarioRepository.find();
  }

  async actualizar(
    id_inventario: number,
    inventario: Inventario,
  ): Promise<Inventario> {
    await this.inventarioRepository.update(id_inventario, inventario);
    return this.encontrarUno(id_inventario);
  }

  async eliminar(id_inventario: number): Promise<void> {
    await this.inventarioRepository.delete(id_inventario);
  }
}
