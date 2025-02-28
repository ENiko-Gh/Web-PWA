import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alerta_Stock } from './alerta_stock.entity';
import { Alerta_StockService } from './alerta_stock.service';
import { Alerta_StockController } from './alerta_stock.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Alerta_Stock])],
  providers: [Alerta_StockService],
  controllers: [Alerta_StockController],
})
export class Alerta_StockModule {}
