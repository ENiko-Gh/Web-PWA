import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) { }

  async crear(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  async encontrarUno(id_categoria: number): Promise<Categoria | undefined> {
    return this.categoriaRepository.findOne({ where: { id_categoria } });
  }

  async encontrarTodos(): Promise<Categoria[]> {  // Tipo de retorno corregido
    return this.categoriaRepository.find();
  }

  async actualizar(
    id_categoria: number,
    categoria: Categoria,
  ): Promise<Categoria | undefined> {
    await this.categoriaRepository.update(id_categoria, categoria);
    return this.encontrarUno(id_categoria);
  }

  async eliminar(id_categoria: number): Promise<void> {
    await this.categoriaRepository.delete(id_categoria);
  }
}