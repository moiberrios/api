import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './models/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario])
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
