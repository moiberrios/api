import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'; 
import { from,map,Observable, switchMap } from 'rxjs';
import { Repository } from 'typeorm';
import { Usuario } from '../models/usuario.entity';

@Injectable()
export class AuthService {
    constructor
    (@InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>,
    ) {}
    
    hashContrasenna(us_contrasenna: string): Observable<string> { 
        return from(bcrypt.hash(us_contrasenna,12));
    }
    registerAccount (usuario:Usuario): Observable<Usuario> {
        const {us_id,us_correo,us_nombre,us_contrasenna}=usuario;

        return this.hashContrasenna(us_contrasenna).pipe(
            switchMap((hashedContrasenna: string)=> {
                return from(this.usuarioRepository.save({
                    us_nombre,
                    us_correo,
                    us_contrasenna: hashedContrasenna,
                })).pipe(
                    map((usuario: Usuario)=> {
                        delete usuario.us_contrasenna;
                        return usuario;
                    })
                );
            })
        )
    }
}
