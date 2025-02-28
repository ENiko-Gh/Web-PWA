import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) { }

  async crear(usuario: Usuario): Promise<Usuario> {
    return this.usuarioRepository.save(usuario);
  }

  async encontrarUno(id_usuario: number): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({ where: { id_usuario } });
  }

  async encontrarPorEmail(email: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({ where: { email } });
  }

  async encontrarTodos(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async actualizar(id_usuario: number, usuario: Usuario): Promise<Usuario | undefined> {
    await this.usuarioRepository.update(id_usuario, usuario);
    return this.encontrarUno(id_usuario);
  }

  async eliminar(id_usuario: number): Promise<void> {
    await this.usuarioRepository.delete(id_usuario);
  }
}