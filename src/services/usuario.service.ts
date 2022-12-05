import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private usuarioRepository: Repository<UsuarioEntity>,
    ) {}

    register(usuario: UsuarioEntity) {
        return this.usuarioRepository.save(usuario);
    }

    update(usuario: UsuarioEntity) {
        return this.usuarioRepository.save(usuario);
    }

    findAll() {
        return this.usuarioRepository.find({
            relations: {
                ubigeo: true
            }
        });
    }

    delete(idUsuario: number) {
        return this.usuarioRepository.delete(idUsuario);
    }

    findById(idUsuario: number) {
        return this.usuarioRepository.findBy({ idUsuario });
    }
}