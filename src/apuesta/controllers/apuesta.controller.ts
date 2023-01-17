import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Apuesta } from "../entities/apuesta.entity";
import { ApuestaService } from "../services/apuesta.service";

@Controller('apuesta')
export class ApuestaController extends BaseController<Apuesta> {

    constructor(private readonly apuestaService: ApuestaService) {
        super();
    }

    getService(): BaseService<Apuesta> {
        return this.apuestaService;
    }

}