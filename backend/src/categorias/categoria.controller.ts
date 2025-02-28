import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';

@Controller('categorias')
export class CategoriaController {
  constructor(private categoriaService: CategoriaService) { }

  @Post()
  async crear(@Body() categoria: Categoria): Promise<Categoria> {
    try {
      return await this.categoriaService.crear(categoria);
    } catch (error) {
      // Manejar errores de creación, por ejemplo, si ya existe una categoría con el mismo nombre
      throw new NotFoundException('Error al crear la categoría');
    }
  }

  @Get(':id_categoria')
  async encontrarUno(
    @Param('id_categoria') id_categoria: number,
  ): Promise<Categoria> {
    const categoria = await this.categoriaService.encontrarUno(id_categoria);
    if (!categoria) {
      throw new NotFoundException('Categoría no encontrada');
    }
    return categoria;
  }

  @Get()
  async encontrarTodos(): Promise<Categoria> {
    return this.categoriaService.encontrarTodos();
  }

  @Put(':id_categoria')
  async actualizar(
    @Param('id_categoria') id_categoria: number,
    @Body() categoria: Categoria,
  ): Promise<Categoria> {
    const categoriaActualizada = await this.categoriaService.actualizar(id_categoria, categoria);
    if (!categoriaActualizada) {
      throw new NotFoundException('Categoría no encontrada');
    }
    return categoriaActualizada;
  }

  @Delete(':id_categoria')
  async eliminar(@Param('id_categoria') id_categoria: number): Promise<void> {
    try {
      await this.categoriaService.eliminar(id_categoria);
    } catch (error) {
      if (error.name === 'EntityNotFoundError') {
        throw new NotFoundException('Categoría no encontrada');
      }
      throw error; // Re-lanzar otros errores
    }
  }
}