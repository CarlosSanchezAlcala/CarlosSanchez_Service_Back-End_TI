import { InjectRepository } from '@nestjs/typeorm';
import { ProveedorEntity } from '../entities/proveedor.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProveedorService {
    constructor(
        @InjectRepository(ProveedorEntity)
        private proveedorRepository: Repository<ProveedorEntity>,
    ) {}

    register(proveedor: ProveedorEntity) {
        return this.proveedorRepository.save(proveedor);
    }

    update(proveedor: ProveedorEntity) {
        return this.proveedorRepository.save(proveedor);
    }

    findAll() {
        return this.proveedorRepository.find({
            relations: {
                ubigeo: true
            }
        });
    }

    delete(idProveedor: number) {
        return this.proveedorRepository.delete(idProveedor);
    }

    findById(idProveedor: number) {
        return this.proveedorRepository.findBy({ idProveedor });
    }
}