import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Entrenador } from "../entities/entrenador.entity";

@Injectable()
export class EntrenadorService extends BaseService<Entrenador> {

    constructor(@InjectRepository(Entrenador) private entrenadorRepo : Repository<Entrenador>) {
        super();
    }

    getRepository(): Repository<Entrenador> {
        return this.entrenadorRepo;
    }

}