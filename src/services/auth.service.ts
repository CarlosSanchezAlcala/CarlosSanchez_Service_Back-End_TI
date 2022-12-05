import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioEntity } from "../entities/usuario.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UsuarioEntity) private usuarioRepository: Repository<UsuarioEntity>) {
  }

  findByUser(dniUsuario: string, claveUsuario: string) {
    return this.usuarioRepository.find({
      where: {
        dniUsuario: dniUsuario,
        claveUsuario: claveUsuario
      }
    })
  }
}