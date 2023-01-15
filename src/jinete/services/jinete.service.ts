import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Jinete } from "../entities/jinete.entity";

@Injectable()
export class JineteService extends BaseService<Jinete> {

    constructor(@InjectRepository(Jinete) private jineteRepo : Repository<Jinete>) {
        super();
    }

    getRepository(): Repository<Jinete> {
        return this.jineteRepo;
    }

}