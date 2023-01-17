import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropietarioController } from './controllers/propietario.controller';
import { Propietario } from './entities/propietario.entity';
import { PropietarioService } from './services/propietario.service';

@Module({
    imports : [TypeOrmModule.forFeature([Propietario])],
    providers : [PropietarioService],
    controllers : [PropietarioController]
})
export class PropietarioModule {

}