import { ProductoService } from '../services/producto.service';
import { ProductoEntity } from '../entities/producto.entity';
import {
    Body,
    Controller,
    Post,
    Put,
    Get,
    Param,
    Delete,
} from '@nestjs/common';

@Controller('Productos')
export class ProductoController {
    constructor(private productoService: ProductoService) {}

    @Post()
    async register(@Body() producto: ProductoEntity): Promise<ProductoEntity> {
        return this.productoService.register(producto);
    }

    @Put()
    async update(@Body() producto: ProductoEntity): Promise<ProductoEntity> {
        return this.productoService.update(producto);
    }

    @Get()
    async findAll(): Promise<ProductoEntity[]> {
        return this.productoService.findAll();
    }

    @Get(':idProducto')
    async findById(@Param('idProducto') idProducto: number) {
        return this.productoService.findById(idProducto);
    }

    @Delete('/delete/:idProducto')
    async deleteById(@Param('idProducto') idProducto: number) {
        return this.productoService.deleteLogico(idProducto);
    }

    @Get("/nombres/:nombreProducto")
    findByName(@Param('nombreProducto') nombreProducto: string) {
        return this.productoService.findByName(nombreProducto);
    }
}