import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Uniforme } from "../entities/uniforme.entity";

@Injectable()
export class UniformeService extends BaseService<Uniforme> {

    constructor(@InjectRepository(Uniforme) private uniformeRepo : Repository<Uniforme>) {
        super();
    }

    getRepository(): Repository<Uniforme> {
        return this.uniformeRepo;
    }

}