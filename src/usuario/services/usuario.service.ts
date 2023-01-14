import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { UsuarioPostEntity } from '../models/post.entity';
import { UsuarioPost } from '../models/post.interface';

@Injectable()
export class UsuarioService{ 
    constructor(
        @InjectRepository(UsuarioPostEntity)
        private readonly usuarioPostRepository: Repository<UsuarioPostEntity>,
    ) {}

    createPost(usuarioPost: UsuarioPost): Observable<UsuarioPost> {
        return from(this.usuarioPostRepository.save(usuarioPost));
    }

    findAllPosts(): Observable<UsuarioPost[]>{
        return from(this.usuarioPostRepository.find());
    }

    updatePost(id: number, usuarioPost: UsuarioPost): Observable<UpdateResult> {
        return from (this.usuarioPostRepository.update(id,usuarioPost));
    }

    deletePost(id:number): Observable<DeleteResult>{
        return from(this.usuarioPostRepository.delete(id));
    }
}
