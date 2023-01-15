import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";

@Injectable()
export class UsuarioService extends BaseService<Usuario> {

    constructor(@InjectRepository(Usuario) private usuarioRepo : Repository<Usuario>) {
        super();
    }

    getRepository(): Repository<Usuario> {
        return this.usuarioRepo;
    }

}