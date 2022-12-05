import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UbigeoEntity } from '../entities/ubigeo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UbigeoService {
    constructor(
        @InjectRepository(UbigeoEntity)
        private ubigeoRepository: Repository<UbigeoEntity>,
    ) {}

    register(ubigeo: UbigeoEntity) {
        return this.ubigeoRepository.save(ubigeo);
    }

    update(ubigeo: UbigeoEntity) {
        return this.ubigeoRepository.save(ubigeo);
    }

    findAll() {
        return this.ubigeoRepository.find();
    }

    delete(id: string) {
        return this.ubigeoRepository.delete(id);
    }

    findById(id: string) {
        return this.ubigeoRepository.findBy({ id });
    }
}