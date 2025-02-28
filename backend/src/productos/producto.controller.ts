import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto.entity';

@Controller('productos')
export class ProductoController {
  constructor(private productoService: ProductoService) {}

  @Post()
  async crear(@Body() producto: Producto): Promise<Producto> {
    return this.productoService.crear(producto);
  }

  @Get(':id_producto')
  async encontrarUno(
    @Param('id_producto') id_producto: number,
  ): Promise<Producto> {
    return this.productoService.encontrarUno(id_producto);
  }

  @Get()
  async encontrarTodos(): Promise<Producto[]> {
    return this.productoService.encontrarTodos();
  }

  @Put(':id_producto')
  async actualizar(
    @Param('id_producto') id_producto: number,
    @Body() producto: Producto,
  ): Promise<Producto> {
    return this.productoService.actualizar(id_producto, producto);
  }

  @Delete(':id_producto')
  async eliminar(@Param('id_producto') id_producto: number): Promise<void> {
    return this.productoService.eliminar(id_producto);
  }
}
