import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Rol } from "../entities/rol.entity";

@Injectable()
export class RolService extends BaseService<Rol> {

    constructor(@InjectRepository(Rol) private rolRepo : Repository<Rol>) {
        super();
    }

    getRepository(): Repository<Rol> {
        return this.rolRepo;
    }

}