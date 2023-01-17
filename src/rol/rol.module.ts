import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolController } from './controllers/rol.controller';
import { Rol } from './entities/rol.entity';
import { RolService } from './services/rol.service';

@Module({
    imports : [TypeOrmModule.forFeature([Rol])],
    providers : [RolService],
    controllers : [RolController]
})
export class RolModule {

}