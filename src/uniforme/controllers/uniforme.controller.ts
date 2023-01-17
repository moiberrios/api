import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Uniforme } from "../entities/uniforme.entity";
import { UniformeService } from "../services/uniforme.service";

@Controller('uniforme')
export class UniformeController extends BaseController<Uniforme> {

    constructor(private readonly uniformeService: UniformeService) {
        super();
    }

    getService(): BaseService<Uniforme> {
        return this.uniformeService;
    }

}