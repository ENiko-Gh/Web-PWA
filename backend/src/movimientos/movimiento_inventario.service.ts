import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movimiento_Inventario } from './movimiento_inventario.entity';

@Injectable()
export class Movimiento_InventarioService {
    constructor(
        @InjectRepository(Movimiento_Inventario)
        private movimientoInventarioRepository: Repository<Movimiento_Inventario>,
    ) { }

    async crear(movimientoInventario: Movimiento_Inventario): Promise<Movimiento_Inventario> {
        return this.movimientoInventarioRepository.save(movimientoInventario);
    }

    async encontrarUno(id_movimiento: number): Promise<Movimiento_Inventario | undefined> {
        return this.movimientoInventarioRepository.findOne({ where: { id_movimiento } });
    }

    async encontrarTodos(): Promise<Movimiento_Inventario[]> {
        return this.movimientoInventarioRepository.find();
    }

    async actualizar(id_movimiento: number, movimientoInventario: Movimiento_Inventario): Promise<Movimiento_Inventario | undefined> {
        await this.movimientoInventarioRepository.update(id_movimiento, movimientoInventario);
        return this.movimientoInventarioRepository.findOne({ where: { id_movimiento } });
    }

    async eliminar(id_movimiento: number): Promise<void> {
        await this.movimientoInventarioRepository.delete(id_movimiento);
    }
}