import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento_Inventario } from './movimiento_inventario.entity';
import { Movimiento_InventarioService } from './movimiento_inventario.service';
import { Movimiento_InventarioController } from './movimiento_inventario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Movimiento_Inventario])],
  providers: [Movimiento_InventarioService],
  controllers: [Movimiento_InventarioController],
})
export class Movimiento_InventarioModule {}
