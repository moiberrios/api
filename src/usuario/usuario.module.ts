import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioPostEntity } from './models/post.entity';
import { UsuarioService } from './services/usuario.service';
// import { UsuarioService } from './controllers/usuario.service';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioPostEntity])],
    providers: [UsuarioService],
    controllers: [UsuarioController],
})
export class UsuarioModule { }