import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Propietario } from "../entities/propietario.entity";

@Injectable()
export class PropietarioService extends BaseService<Propietario> {

    constructor(@InjectRepository(Propietario) private propietarioRepo : Repository<Propietario>) {
        super();
    }

    getRepository(): Repository<Propietario> {
        return this.propietarioRepo;
    }

}