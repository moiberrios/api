import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";

@Controller('usuario')
export class UsuarioController extends BaseController<Usuario> {

    constructor(private readonly usuarioService: UsuarioService) {
        super();
    }

    getService(): BaseService<Usuario> {
        return this.usuarioService;
    }

}