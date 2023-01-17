import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudController } from './controllers/stud.controller';
import { Stud } from './entities/stud.entity';
import { StudService } from './services/stud.service';

@Module({
    imports : [TypeOrmModule.forFeature([Stud])],
    providers : [StudService],
    controllers : [StudController]
})
export class StudModule {
}