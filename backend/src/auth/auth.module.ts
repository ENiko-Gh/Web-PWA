import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioModule } from '../usuarios/usuario.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy'; // Importa LocalStrategy
import { LocalAuthGuard } from './local-auth.guard'; // Importa LocalAuthGuard

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: 'tu_secreto', // Cambia esto por una clave segura
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy, LocalAuthGuard], // Agrega LocalStrategy y LocalAuthGuard a los providers
  controllers: [AuthController],
  exports: [AuthService], //exportamos el servicio
})
export class AuthModule {}
