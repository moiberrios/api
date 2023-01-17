import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JineteController } from './controllers/jinete.controller';
import { Jinete } from './entities/jinete.entity';
import { JineteService } from './services/jinete.service';

@Module({
    imports : [TypeOrmModule.forFeature([Jinete])],
    providers : [JineteService],
    controllers : [JineteController]
})
export class JineteModule {
}