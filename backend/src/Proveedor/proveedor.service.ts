import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from './proveedor.entity';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private proveedorRepository: Repository<Proveedor>,
  ) {}

  async crear(proveedor: Proveedor): Promise<Proveedor> {
    return this.proveedorRepository.save(proveedor);
  }

  async encontrarUno(id_proveedor: number): Promise<Proveedor> {
    return this.proveedorRepository.findOne(id_proveedor);
  }

  async encontrarTodos(): Promise<Proveedor[]> {
    return this.proveedorRepository.find();
  }

  async actualizar(
    id_proveedor: number,
    proveedor: Proveedor,
  ): Promise<Proveedor> {
    await this.proveedorRepository.update(id_proveedor, proveedor);
    return this.encontrarUno(id_proveedor);
  }

  async eliminar(id_proveedor: number): Promise<void> {
    await this.proveedorRepository.delete(id_proveedor);
  }
}
