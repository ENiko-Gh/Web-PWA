import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Movimiento_InventarioService } from './movimiento_inventario.service';
import { Movimiento_Inventario } from './movimiento_inventario.entity';

@Controller('movimientos')
export class Movimiento_InventarioController {
  constructor(
    private movimientoInventarioService: Movimiento_InventarioService,
  ) {}

  @Post()
  async crear(
    @Body() movimientoInventario: Movimiento_Inventario,
  ): Promise<Movimiento_Inventario> {
    return this.movimientoInventarioService.crear(movimientoInventario);
  }

  @Get(':id_movimiento')
  async encontrarUno(
    @Param('id_movimiento') id_movimiento: number,
  ): Promise<Movimiento_Inventario> {
    return this.movimientoInventarioService.encontrarUno(id_movimiento);
  }

  @Get()
  async encontrarTodos(): Promise<Movimiento_Inventario[]> {
    return this.movimientoInventarioService.encontrarTodos();
  }

  @Put(':id_movimiento')
  async actualizar(
    @Param('id_movimiento') id_movimiento: number,
    @Body() movimientoInventario: Movimiento_Inventario,
  ): Promise<Movimiento_Inventario> {
    return this.movimientoInventarioService.actualizar(
      id_movimiento,
      movimientoInventario,
    );
  }

  @Delete(':id_movimiento')
  async eliminar(@Param('id_movimiento') id_movimiento: number): Promise<void> {
    return this.movimientoInventarioService.eliminar(id_movimiento);
  }
}
