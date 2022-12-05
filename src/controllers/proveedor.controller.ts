import { ProveedorService } from '../services/proveedor.service';
import {
    Body,
    Param,
    Get,
    Put,
    Delete,
    Controller,
    Post,
} from '@nestjs/common';
import { ProveedorEntity } from '../entities/proveedor.entity';

@Controller('Proveedor')
export class ProveedorController {
    constructor(private proveedorService: ProveedorService) {}

    @Post()
    async registrar(
        @Body() proveedor: ProveedorEntity,
    ): Promise<ProveedorEntity> {
        return this.proveedorService.register(proveedor);
    }

    @Put()
    async update(@Body() proveedor: ProveedorEntity): Promise<ProveedorEntity> {
        return this.proveedorService.update(proveedor);
    }

    @Get()
    async findAll(): Promise<ProveedorEntity[]> {
        return this.proveedorService.findAll();
    }

    @Get(':idProveedor')
    async findByID(@Param('idProveedor') idProveedor: number) {
        return this.proveedorService.findById(idProveedor);
    }

    @Delete(':idProveedor')
    async deleteById(@Param('idProveedor') idProveedor: number) {
        return this.proveedorService.delete(idProveedor);
    }
}