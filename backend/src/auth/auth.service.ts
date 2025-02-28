import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuarios/usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../usuarios/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usuarioService.encontrarPorEmail(email);
    if (user && (await bcrypt.compare(pass, user.password_hash))) {
      const { password_hash, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id_usuario }; // Use id_usuario here
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(usuario: Usuario): Promise<any> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(usuario.password_hash, saltOrRounds);
    usuario.password_hash = hash;
    return this.usuarioService.crear(usuario);
  }
}