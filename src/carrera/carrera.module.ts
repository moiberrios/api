import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreraController } from './controllers/carrera.controller';
import { Carrera } from './entities/carrera.entity';
import { CarreraService } from './services/carrera.service';

@Module({
    imports : [TypeOrmModule.forFeature([Carrera])],
    providers : [CarreraService],
    controllers : [CarreraController]
})
export class CarreraModule {

}