import { InjectRepository } from '@nestjs/typeorm';
import { ProductoEntity } from '../entities/producto.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(ProductoEntity)
        private productoRepository: Repository<ProductoEntity>,
    ) {}

    register(producto: ProductoEntity) {
        return this.productoRepository.save(producto);
    }

    update(producto: ProductoEntity) {
        return this.productoRepository.save(producto);
    }

    findAll() {
        return this.productoRepository.find();
    }

    delete(idProducto: number) {
        return this.productoRepository.delete(idProducto);
    }

    findById(idProducto: number) {
        return this.productoRepository.findBy({ idProducto });
    }
}