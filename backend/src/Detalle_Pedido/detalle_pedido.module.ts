import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detalle_Pedido } from './detalle_pedido.entity';
import { Detalle_PedidoService } from './detalle_pedido.service';
import { Detalle_PedidoController } from './detalle_pedido.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Detalle_Pedido])],
  providers: [Detalle_PedidoService],
  controllers: [Detalle_PedidoController],
})
export class Detalle_PedidoModule {}
