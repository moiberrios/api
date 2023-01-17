import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Stud } from "../entities/stud.entity";

@Injectable()
export class StudService extends BaseService<Stud> {

    constructor(@InjectRepository(Stud) private studRepo : Repository<Stud>) {
        super();
    }

    getRepository(): Repository<Stud> {
        return this.studRepo;
    }

}