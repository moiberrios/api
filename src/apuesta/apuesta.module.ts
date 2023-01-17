import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApuestaController } from './controllers/apuesta.controller';
import { Apuesta } from './entities/apuesta.entity';
import { ApuestaService } from './services/apuesta.service';

@Module({
    imports : [TypeOrmModule.forFeature([Apuesta])],
    providers : [ApuestaService],
    controllers : [ApuestaController]
})
export class ApuestaModule {

}