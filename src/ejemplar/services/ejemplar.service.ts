import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Ejemplar } from "../entities/ejemplar.entity";

@Injectable()
export class EjemplarService extends BaseService<Ejemplar> {

    constructor(@InjectRepository(Ejemplar) private ejemplarRepo : Repository<Ejemplar>) {
        super();
    }

    getRepository(): Repository<Ejemplar> {
        return this.ejemplarRepo;
    }

}