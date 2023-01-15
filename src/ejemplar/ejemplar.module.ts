import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EjemplarController } from './controllers/ejemplar.controller';
import { Ejemplar } from './entities/ejemplar.entity';
import { EjemplarService } from './services/ejemplar.service';

@Module({
    imports : [TypeOrmModule.forFeature([Ejemplar])],
    providers : [EjemplarService],
    controllers : [EjemplarController]
})
export class EjemplarModule {

}