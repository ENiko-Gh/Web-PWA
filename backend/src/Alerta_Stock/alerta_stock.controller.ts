import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Alerta_StockService } from './alerta_stock.service';
import { Alerta_Stock } from './alerta_stock.entity';

@Controller('alertas')
export class Alerta_StockController {
  constructor(private alertaStockService: Alerta_StockService) {}

  @Post()
  async crear(@Body() alertaStock: Alerta_Stock): Promise<Alerta_Stock> {
    return this.alertaStockService.crear(alertaStock);
  }

  @Get(':id_alerta')
  async encontrarUno(
    @Param('id_alerta') id_alerta: number,
  ): Promise<Alerta_Stock> {
    return this.alertaStockService.encontrarUno(id_alerta);
  }

  @Get()
  async encontrarTodos(): Promise<Alerta_Stock[]> {
    return this.alertaStockService.encontrarTodos();
  }

  @Put(':id_alerta')
  async actualizar(
    @Param('id_alerta') id_alerta: number,
    @Body() alertaStock: Alerta_Stock,
  ): Promise<Alerta_Stock> {
    return this.alertaStockService.actualizar(id_alerta, alertaStock);
  }

  @Delete(':id_alerta')
  async eliminar(@Param('id_alerta') id_alerta: number): Promise<void> {
    return this.alertaStockService.eliminar(id_alerta);
  }
}
