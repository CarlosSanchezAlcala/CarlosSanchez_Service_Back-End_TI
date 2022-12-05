import { UsuarioService } from '../services/usuario.service';
import {
    Body,
    Controller,
    Post,
    Put,
    Get,
    Param,
    Delete,
} from '@nestjs/common';
import { UsuarioEntity } from '../entities/usuario.entity';

@Controller('Usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}

    @Post()
    async register(@Body() usuario: UsuarioEntity): Promise<UsuarioEntity> {
        return this.usuarioService.register(usuario);
    }

    @Put()
    async update(@Body() usuario: UsuarioEntity): Promise<UsuarioEntity> {
        return this.usuarioService.update(usuario);
    }

    @Get()
    async findAll(): Promise<UsuarioEntity[]> {
        return this.usuarioService.findAll();
    }

    @Get(':idUsuario')
    async findById(@Param('idUsuario') idUsuario: number) {
        return this.usuarioService.findById(idUsuario);
    }

    @Delete(':idUsuario')
    async deleteById(@Param('idUsuario') idUsuario: number) {
        return this.usuarioService.delete(idUsuario);
    }
}