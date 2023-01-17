import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Rol } from "../entities/rol.entity";
import { RolService } from "../services/rol.service";

@Controller('rol')
export class RolController extends BaseController<Rol> {

    constructor(private readonly rolService: RolService) {
        super();
    }

    getService(): BaseService<Rol> {
        return this.rolService;
    }

}