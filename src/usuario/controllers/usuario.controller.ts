import { Get, Controller, Body, Post, Put, Param, Delete } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UsuarioPost } from '../models/post.interface';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}
    @Post()
    create(@Body() usuarioPost: UsuarioPost): Observable<UsuarioPost> {
       return this.usuarioService.createPost(usuarioPost) 
    }

    @Get()
    findAll(): Observable<UsuarioPost[]> {
        return this.usuarioService.findAllPosts();
    }

    @Put(':id')
    update(
        @Param('id') id:number,
        @Body() usuarioPost: UsuarioPost,
    ): Observable<UpdateResult> {
        return this.usuarioService.updatePost(id,usuarioPost);
    }

    @Delete(':id')
    delete(@Param('id') id: number):Observable<DeleteResult>{
        return this.usuarioService.deletePost(id);
    }
}
