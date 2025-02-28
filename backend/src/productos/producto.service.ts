import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  async crear(producto: Producto): Promise<Producto> {
    return this.productoRepository.save(producto);
  }

  async encontrarUno(id_producto: number): Promise<Producto> {
    return this.productoRepository.findOne(id_producto);
  }

  async encontrarTodos(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  async actualizar(id_producto: number, producto: Producto): Promise<Producto> {
    await this.productoRepository.update(id_producto, producto);
    return this.encontrarUno(id_producto);
  }

  async eliminar(id_producto: number): Promise<void> {
    await this.productoRepository.delete(id_producto);
  }
}
