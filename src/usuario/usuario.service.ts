import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private repository: Repository<Usuario>
    ) { }

    findAll(): Promise<Usuario[]> {
        return this.repository.find();
    }

    save(usuario: Usuario) {
        return this.repository.save(usuario)
    }
}
