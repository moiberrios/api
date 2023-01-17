import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompraController } from './controllers/compra.controller';
import { Compra } from './entities/compra.entity';
import { CompraService } from './services/compra.service';

@Module({
    imports : [TypeOrmModule.forFeature([Compra])],
    providers : [CompraService],
    controllers : [CompraController]
})
export class CompraModule {
}