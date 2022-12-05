import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { UbigeoEntity } from "./ubigeo.entity";

@Entity({ name: 'CLIENTE' })
export class ClienteEntity {
    @PrimaryColumn({ name: 'IDCLI', nullable: false })
    idCliente: number;

    @Column({ name: 'NOMCLI', nullable: false })
    nombrecliente: string;

    @Column({ name: 'APEPATCLI', nullable: false })
    apellidoPaternoCliente: string;

    @Column({ name: 'APEMATCLI', nullable: false })
    apellidoMaternoCliente: string;

    @Column({ name: 'DNICLI', nullable: false })
    dniCliente: string;

    @Column({ name: 'CORCLI', nullable: false })
    correoCliente: string;

    @Column({ name: 'CELCLI', nullable: false })
    celularCliente: String;

    @OneToOne(() => UbigeoEntity)
    @JoinColumn({name: 'CODUBI'})
    ubigeo: UbigeoEntity;

    @Column({ name: 'DIRCLI', nullable: false })
    direccionCliente: string;

    @Column({ name: 'ESTCLI', nullable: false })
    estadoCliente: string;
}