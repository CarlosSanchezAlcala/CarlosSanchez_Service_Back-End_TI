import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { ProductoEntity } from '../entities/producto.entity';
import { DataSource, Repository } from "typeorm";
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(ProductoEntity)
        private productoRepository: Repository<ProductoEntity>,
        @InjectDataSource() private datasource: DataSource
    ) {}

    register(producto: ProductoEntity) {
        return this.productoRepository.save(producto);
    }

    update(producto: ProductoEntity) {
        return this.productoRepository.save(producto);
    }

    findAll() {
        return this.productoRepository.find({
            where: {
                estadoProducto: 'A'
            }
        });
    }

    delete(idProducto: number) {
        return this.productoRepository.delete(idProducto);
    }

    deleteLogico(idProducto: number) {
        this.findById(idProducto).then(res => {
            const producto = res[0];
            producto.estadoProducto = 'I';
            this.productoRepository.save(producto)
        })
    }

    findById(idProducto: number) {
        return this.productoRepository.findBy({ idProducto });
    }

    findByName(nombreProducto: string) {
        return this.productoRepository.findBy({nombreProducto});
    }
}