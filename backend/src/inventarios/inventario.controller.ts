import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { Inventario } from './inventario.entity';

@Controller('inventarios')
export class InventarioController {
  constructor(private inventarioService: InventarioService) {}

  @Post()
  async crear(@Body() inventario: Inventario): Promise<Inventario> {
    return this.inventarioService.crear(inventario);
  }

  @Get(':id_inventario')
  async encontrarUno(
    @Param('id_inventario') id_inventario: number,
  ): Promise<Inventario> {
    return this.inventarioService.encontrarUno(id_inventario);
  }

  @Get()
  async encontrarTodos(): Promise<Inventario[]> {
    return this.inventarioService.encontrarTodos();
  }

  @Put(':id_inventario')
  async actualizar(
    @Param('id_inventario') id_inventario: number,
    @Body() inventario: Inventario,
  ): Promise<Inventario> {
    return this.inventarioService.actualizar(id_inventario, inventario);
  }

  @Delete(':id_inventario')
  async eliminar(@Param('id_inventario') id_inventario: number): Promise<void> {
    return this.inventarioService.eliminar(id_inventario);
  }
}
