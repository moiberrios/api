import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Tipo_Apu } from "../entities/tipo_apu.entity";

@Injectable()
export class Tipo_ApuService extends BaseService<Tipo_Apu> {

    constructor(@InjectRepository(Tipo_Apu) private tipoApuRepo : Repository<Tipo_Apu>) {
        super();
    }

    getRepository(): Repository<Tipo_Apu> {
        return this.tipoApuRepo;
    }

}