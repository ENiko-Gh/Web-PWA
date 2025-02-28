import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';

@Controller('pedidos')
export class PedidoController {
  constructor(private pedidoService: PedidoService) {}

  @Post()
  async crear(@Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidoService.crear(pedido);
  }

  @Get(':id_pedido')
  async encontrarUno(@Param('id_pedido') id_pedido: number): Promise<Pedido> {
    return this.pedidoService.encontrarUno(id_pedido);
  }

  @Get()
  async encontrarTodos(): Promise<Pedido[]> {
    return this.pedidoService.encontrarTodos();
  }

  @Put(':id_pedido')
  async actualizar(
    @Param('id_pedido') id_pedido: number,
    @Body() pedido: Pedido,
  ): Promise<Pedido> {
    return this.pedidoService.actualizar(id_pedido, pedido);
  }

  @Delete(':id_pedido')
  async eliminar(@Param('id_pedido') id_pedido: number): Promise<void> {
    return this.pedidoService.eliminar(id_pedido);
  }
}
