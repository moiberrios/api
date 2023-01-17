import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Carrera } from "../entities/carrera.entity";

@Injectable()
export class CarreraService extends BaseService<Carrera> {

    constructor(@InjectRepository(Carrera) private carreraRepo : Repository<Carrera>) {
        super();
    }

    getRepository(): Repository<Carrera> {
        return this.carreraRepo;
    }

}