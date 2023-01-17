import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Stud } from "../entities/stud.entity";
import { StudService } from "../services/stud.service";

@Controller('stud')
export class StudController extends BaseController<Stud> {

    constructor(private readonly entrenadorService: StudService) {
        super();
    }

    getService(): BaseService<Stud> {
        return this.entrenadorService;
    }

}