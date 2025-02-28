import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { Empresa } from './empresa.entity';

@Controller('empresas')
export class EmpresaController {
  constructor(private empresaService: EmpresaService) {}

  @Post()
  async crear(@Body() empresa: Empresa): Promise<Empresa> {
    return this.empresaService.crear(empresa);
  }

  @Get(':id_empresa')
  async encontrarUno(
    @Param('id_empresa') id_empresa: number,
  ): Promise<Empresa> {
    return this.empresaService.encontrarUno(id_empresa);
  }

  @Get()
  async encontrarTodos(): Promise<Empresa[]> {
    return this.empresaService.encontrarTodos();
  }

  @Put(':id_empresa')
  async actualizar(
    @Param('id_empresa') id_empresa: number,
    @Body() empresa: Empresa,
  ): Promise<Empresa> {
    return this.empresaService.actualizar(id_empresa, empresa);
  }

  @Delete(':id_empresa')
  async eliminar(@Param('id_empresa') id_empresa: number): Promise<void> {
    return this.empresaService.eliminar(id_empresa);
  }
}
