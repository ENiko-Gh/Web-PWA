import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  async crear(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.crear(usuario);
  }

  @Get(':id')
  async encontrarUno(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.encontrarUno(id);
  }
}
