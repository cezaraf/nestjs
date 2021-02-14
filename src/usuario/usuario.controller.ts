import { Body, Controller, Get, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('/api/usuario')
export class UsuarioController {

    constructor(private readonly service: UsuarioService) { }

    @Get()
    findAll() {
        return this.service.findAll()
    }

    @Post()
    save(@Body() usuario: Usuario) {
        return this.service.save(usuario)
    }
}
