import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Ejemplar } from "../entities/ejemplar.entity";
import { EjemplarService } from "../services/ejemplar.service";

@Controller('ejemplar')
export class EjemplarController extends BaseController<Ejemplar> {

    constructor(private readonly ejemplarService: EjemplarService) {
        super();
    }

    getService(): BaseService<Ejemplar> {
        return this.ejemplarService;
    }

}