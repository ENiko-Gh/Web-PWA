import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Detalle_PedidoService } from './detalle_pedido.service';
import { Detalle_Pedido } from './detalle_pedido.entity';

@Controller('detalles_pedido')
export class Detalle_PedidoController {
  constructor(private detallePedidoService: Detalle_PedidoService) {}

  @Post()
  async crear(@Body() detallePedido: Detalle_Pedido): Promise<Detalle_Pedido> {
    return this.detallePedidoService.crear(detallePedido);
  }

  @Get(':id_detalle_pedido')
  async encontrarUno(
    @Param('id_detalle_pedido') id_detalle_pedido: number,
  ): Promise<Detalle_Pedido> {
    return this.detallePedidoService.encontrarUno(id_detalle_pedido);
  }

  @Get()
  async encontrarTodos(): Promise<Detalle_Pedido[]> {
    return this.detallePedidoService.encontrarTodos();
  }

  @Put(':id_detalle_pedido')
  async actualizar(
    @Param('id_detalle_pedido') id_detalle_pedido: number,
    @Body() detallePedido: Detalle_Pedido,
  ): Promise<Detalle_Pedido> {
    return this.detallePedidoService.actualizar(
      id_detalle_pedido,
      detallePedido,
    );
  }

  @Delete(':id_detalle_pedido')
  async eliminar(
    @Param('id_detalle_pedido') id_detalle_pedido: number,
  ): Promise<void> {
    return this.detallePedidoService.eliminar(id_detalle_pedido);
  }
}
