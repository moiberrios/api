import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Entrenador } from "../entities/entrenador.entity";
import { EntrenadorService } from "../services/entrenador.service";

@Controller('entrenador')
export class EntrenadorController extends BaseController<Entrenador> {

    constructor(private readonly entrenadorService: EntrenadorService) {
        super();
    }

    getService(): BaseService<Entrenador> {
        return this.entrenadorService;
    }

}