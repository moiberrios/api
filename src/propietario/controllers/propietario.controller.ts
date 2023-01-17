import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Propietario } from "../entities/propietario.entity";
import { PropietarioService } from "../services/propietario.service";

@Controller('propietario')
export class PropietarioController extends BaseController<Propietario> {

    constructor(private readonly propietarioService: PropietarioService) {
        super();
    }

    getService(): BaseService<Propietario> {
        return this.propietarioService;
    }

}