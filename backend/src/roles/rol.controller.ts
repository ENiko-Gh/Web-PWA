import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { RolService } from './rol.service';
import { Rol } from './rol.entity';

@Controller('roles')
export class RolController {
  constructor(private rolService: RolService) {}

  @Post()
  async crear(@Body() rol: Rol): Promise<Rol> {
    return this.rolService.crear(rol);
  }

  @Get(':id_rol')
  async encontrarUno(@Param('id_rol') id_rol: number): Promise<Rol> {
    return this.rolService.encontrarUno(id_rol);
  }

  @Get()
  async encontrarTodos(): Promise<Rol[]> {
    return this.rolService.encontrarTodos();
  }

  @Put(':id_rol')
  async actualizar(
    @Param('id_rol') id_rol: number,
    @Body() rol: Rol,
  ): Promise<Rol> {
    return this.rolService.actualizar(id_rol, rol);
  }

  @Delete(':id_rol')
  async eliminar(@Param('id_rol') id_rol: number): Promise<void> {
    return this.rolService.eliminar(id_rol);
  }
}
