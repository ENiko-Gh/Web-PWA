import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Usuario } from '../usuarios/usuario.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK) // Establece el código de estado HTTP a 200 OK
  async login(@Request() req) {
    try {
      return this.authService.login(req.user);
    } catch (error) {
      throw new HttpException(
        'Error al iniciar sesión',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  @Post('register')
  async register(@Body() usuario: Usuario) {
    try {
      return this.authService.register(usuario);
    } catch (error) {
      // Manejar errores específicos de registro (por ejemplo, usuario ya existe)
      if (error.code === 'ER_DUP_ENTRY') {
        throw new HttpException(
          'El correo electrónico ya está registrado',
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException(
        'Error al registrar el usuario',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
