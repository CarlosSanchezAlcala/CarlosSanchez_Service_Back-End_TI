import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Put,
} from '@nestjs/common';
import { UbigeoService } from '../services/ubigeo.service';
import { UbigeoEntity } from '../entities/ubigeo.entity';

@Controller('Ubigeos')
export class UbigeoController {
    constructor(private ubigeoService: UbigeoService) {}

    @Post()
    async register(@Body() ubigeo: UbigeoEntity): Promise<UbigeoEntity> {
        return this.ubigeoService.register(ubigeo);
    }

    @Put()
    async update(@Body() ubigeo: UbigeoEntity): Promise<UbigeoEntity> {
        return this.ubigeoService.update(ubigeo);
    }

    @Get()
    async findAll(): Promise<UbigeoEntity[]> {
        return this.ubigeoService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.ubigeoService.findById(id);
    }

    @Delete(':id')
    async deleteById(@Param('id') id: string) {
        return this.ubigeoService.delete(id);
    }
}