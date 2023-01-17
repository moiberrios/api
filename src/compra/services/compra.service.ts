import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Compra } from "../entities/compra.entity";

@Injectable()
export class CompraService extends BaseService<Compra> {

    constructor(@InjectRepository(Compra) private compraRepo : Repository<Compra>) {
        super();
    }

    getRepository(): Repository<Compra> {
        return this.compraRepo;
    }

}