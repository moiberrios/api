import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Carrera } from "../entities/carrera.entity";
import { CarreraService } from "../services/carrera.service";

@Controller('carrera')
export class CarreraController extends BaseController<Carrera> {

    constructor(private readonly carreraService: CarreraService) {
        super();
    }

    getService(): BaseService<Carrera> {
        return this.carreraService;
    }

}