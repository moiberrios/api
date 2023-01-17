import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.entity';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    register(@Body() usuario: Usuario): Observable<Usuario>{
        return this.authService.registerAccount(usuario);
    }
}