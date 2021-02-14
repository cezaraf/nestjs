import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Usuario])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers: [
        UsuarioController
    ],
    providers: [
        UsuarioService
    ],
})
export class UsuarioModule { }
