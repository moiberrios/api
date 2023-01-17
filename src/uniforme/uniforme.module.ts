import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniformeController } from './controllers/uniforme.controller';
import { Uniforme } from './entities/uniforme.entity';
import { UniformeService } from './services/uniforme.service';

@Module({
    imports : [TypeOrmModule.forFeature([Uniforme])],
    providers : [UniformeService],
    controllers : [UniformeController]
})
export class UniformeModule {

}