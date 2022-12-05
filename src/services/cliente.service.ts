import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { ClienteEntity } from '../entities/cliente.entity';
import { DataSource, Repository } from "typeorm";

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(ClienteEntity)
        private clienteRepository: Repository<ClienteEntity>,
        @InjectDataSource() private datasource: DataSource
    ) {}

    register(cliente: ClienteEntity) {
        return this.clienteRepository.save(cliente);
    }

    update(cliente: ClienteEntity) {
        return this.clienteRepository.save(cliente);
    }

    findAll() {
        return this.clienteRepository.find({
            where: {
                estadoCliente: 'A'
            },
            relations: {
                ubigeo: true
            }
        });
    }

    delete(idCliente: number) {
        return this.clienteRepository.delete(idCliente);
    }

    findById(idCliente: number) {
        return this.clienteRepository.find({
            where: {idCliente},
            relations: {
                ubigeo: true
            }
        });
    }

    deleteLogico(idCliente: number) {
        this.findById(idCliente).then(res => {
            const cliente = res[0];
            cliente.estadoCliente = 'I';
            this.clienteRepository.save(cliente)
        })
    }

    async executeQuery() {
        return this.datasource.query('SELECT * FROM CLIENTE');
    }

    findByName(nombrecliente: string) {
        return this.clienteRepository.findBy({nombrecliente});
    }
}