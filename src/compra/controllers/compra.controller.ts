import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Compra } from "../entities/compra.entity";
import { CompraService } from "../services/compra.service";

@Controller('compra')
export class CompraController extends BaseController<Compra> {

    constructor(private readonly entrenadorService: CompraService) {
        super();
    }

    getService(): BaseService<Compra> {
        return this.entrenadorService;
    }

}