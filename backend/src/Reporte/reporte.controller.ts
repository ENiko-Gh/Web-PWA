import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { Reporte } from './reporte.entity';

@Controller('reportes')
export class ReporteController {
  constructor(private reporteService: ReporteService) {}

  @Post()
  async crear(@Body() reporte: Reporte): Promise<Reporte> {
    return this.reporteService.crear(reporte);
  }

  @Get(':id_reporte')
  async encontrarUno(
    @Param('id_reporte') id_reporte: number,
  ): Promise<Reporte> {
    return this.reporteService.encontrarUno(id_reporte);
  }

  @Get()
  async encontrarTodos(): Promise<Reporte[]> {
    return this.reporteService.encontrarTodos();
  }

  @Put(':id_reporte')
  async actualizar(
    @Param('id_reporte') id_reporte: number,
    @Body() reporte: Reporte,
  ): Promise<Reporte> {
    return this.reporteService.actualizar(id_reporte, reporte);
  }

  @Delete(':id_reporte')
  async eliminar(@Param('id_reporte') id_reporte: number): Promise<void> {
    return this.reporteService.eliminar(id_reporte);
  }
}
