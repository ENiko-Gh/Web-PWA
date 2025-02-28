import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.entity';

@Controller('proveedores')
export class ProveedorController {
  constructor(private proveedorService: ProveedorService) {}

  @Post()
  async crear(@Body() proveedor: Proveedor): Promise<Proveedor> {
    return this.proveedorService.crear(proveedor);
  }

  @Get(':id_proveedor')
  async encontrarUno(
    @Param('id_proveedor') id_proveedor: number,
  ): Promise<Proveedor> {
    return this.proveedorService.encontrarUno(id_proveedor);
  }

  @Get()
  async encontrarTodos(): Promise<Proveedor[]> {
    return this.proveedorService.encontrarTodos();
  }

  @Put(':id_proveedor')
  async actualizar(
    @Param('id_proveedor') id_proveedor: number,
    @Body() proveedor: Proveedor,
  ): Promise<Proveedor> {
    return this.proveedorService.actualizar(id_proveedor, proveedor);
  }

  @Delete(':id_proveedor')
  async eliminar(@Param('id_proveedor') id_proveedor: number): Promise<void> {
    return this.proveedorService.eliminar(id_proveedor);
  }
}
