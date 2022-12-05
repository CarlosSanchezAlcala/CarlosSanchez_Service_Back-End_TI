import { ClienteService } from '../services/cliente.service';
import {
    Body,
    Controller,
    Post,
    Put,
    Get,
    Param,
    Delete,
} from '@nestjs/common';
import { ClienteEntity } from '../entities/cliente.entity';

@Controller('Clientes')
export class ClienteController {
    constructor(private clienteService: ClienteService) {}

    @Post()
    async register(@Body() cliente: ClienteEntity): Promise<ClienteEntity> {
        return this.clienteService.register(cliente);
    }

    @Put()
    async update(@Body() cliente: ClienteEntity): Promise<ClienteEntity> {
        return this.clienteService.update(cliente);
    }

    @Get()
    async findAll(): Promise<ClienteEntity[]> {
        return this.clienteService.findAll();
    }

    @Get('/query')
    async findQuery() {
        return this.clienteService.executeQuery();
    }

    @Get(':idCliente')
    async findById(@Param('idCliente') idCliente: number) {
        return this.clienteService.findById(idCliente);
    }

    @Delete('/delete/:idCliente')
    async delete(@Param('idCliente') idCliente: number) {
         this.clienteService.deleteLogico(idCliente);
    }

    @Get("/nombre/:nombrecliente")
    findByName(@Param('nombrecliente') nombrecliente: string) {
        return this.clienteService.findByName(nombrecliente);
    }
}