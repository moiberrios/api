import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tipo_ApuController } from './controllers/tipo_apu.controller';
import { Tipo_Apu } from './entities/tipo_apu.entity';
import { Tipo_ApuService } from './services/tipo_apu.service';

@Module({
    imports : [TypeOrmModule.forFeature([Tipo_Apu])],
    providers : [Tipo_ApuService],
    controllers : [Tipo_ApuController]
})
export class Tipo_ApuModule {

}