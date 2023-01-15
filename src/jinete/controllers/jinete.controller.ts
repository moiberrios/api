import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Jinete } from "../entities/jinete.entity";
import { JineteService } from "../services/jinete.service";

@Controller('jinete')
export class JineteController extends BaseController<Jinete> {

    constructor(private readonly entrenadorService: JineteService) {
        super();
    }

    getService(): BaseService<Jinete> {
        return this.entrenadorService;
    }

}