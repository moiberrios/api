import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Apuesta } from "../entities/apuesta.entity";

@Injectable()
export class ApuestaService extends BaseService<Apuesta> {

    constructor(@InjectRepository(Apuesta) private apuestaRepo : Repository<Apuesta>) {
        super();
    }

    getRepository(): Repository<Apuesta> {
        return this.apuestaRepo;
    }

}