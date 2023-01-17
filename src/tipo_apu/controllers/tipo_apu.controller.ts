import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Tipo_Apu } from "../entities/tipo_apu.entity";
import { Tipo_ApuService } from "../services/tipo_apu.service";

@Controller('tipo_apu')
export class Tipo_ApuController extends BaseController<Tipo_Apu> {

    constructor(private readonly tipo_ApuService: Tipo_ApuService) {
        super();
    }

    getService(): BaseService<Tipo_Apu> {
        return this.tipo_ApuService;
    }

}