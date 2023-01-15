import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntrenadorController } from './controllers/entrenador.controller';
import { Entrenador } from './entities/entrenador.entity';
import { EntrenadorService } from './services/entrenador.service';

@Module({
    imports : [TypeOrmModule.forFeature([Entrenador])],
    providers : [EntrenadorService],
    controllers : [EntrenadorController]
})
export class EntrenadorModule {

}