import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}

  async crear(empresa: Empresa): Promise<Empresa> {
    return this.empresaRepository.save(empresa);
  }

  async encontrarUno(id_empresa: number): Promise<Empresa> {
    return this.empresaRepository.findOne(id_empresa);
  }

  async encontrarTodos(): Promise<Empresa[]> {
    return this.empresaRepository.find();
  }

  async actualizar(id_empresa: number, empresa: Empresa): Promise<Empresa> {
    await this.empresaRepository.update(id_empresa, empresa);
    return this.encontrarUno(id_empresa);
  }

  async eliminar(id_empresa: number): Promise<void> {
    await this.empresaRepository.delete(id_empresa);
  }
}
