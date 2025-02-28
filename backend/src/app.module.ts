import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuarios/usuario.module';
import { RolModule } from './roles/rol.module';
import { EmpresaModule } from './empresas/empresa.module';
import { ProveedorModule } from './proveedores/proveedor.module';
import { CategoriaModule } from './categorias/categoria.module';
import { ProductoModule } from './productos/producto.module';
import { InventarioModule } from './inventarios/inventario.module';
import { Movimiento_InventarioModule } from './movimientos/movimiento_inventario.module';
import { ReporteModule } from './reportes/reporte.module';
import { Alerta_StockModule } from './alertas_stock/alerta_stock.module';
import { PedidoModule } from './pedidos/pedido.module';
import { Detalle_PedidoModule } from './detalles_pedido/detalle_pedido.module';
import { AuthModule } from './auth/auth.module'; // Importa AuthModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // o la base de datos que estés usando
      host: 'localhost',
      port: 3306,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'tu_base_de_datos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // solo en desarrollo
    }),
    UsuarioModule,
    RolModule,
    EmpresaModule,
    ProveedorModule,
    CategoriaModule,
    ProductoModule,
    InventarioModule,
    Movimiento_InventarioModule,
    ReporteModule,
    Alerta_StockModule,
    PedidoModule,
    Detalle_PedidoModule,
    AuthModule, // Agrega AuthModule a los imports
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
