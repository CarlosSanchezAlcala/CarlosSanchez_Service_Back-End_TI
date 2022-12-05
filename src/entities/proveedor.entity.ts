import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
import {UbigeoEntity} from "./ubigeo.entity";

@Entity({ name: 'PROVEEDOR' })
export class ProveedorEntity {
    @PrimaryColumn({ name: 'IDPROV', nullable: false })
    idProveedor: number;

    @Column({ name: 'RAZSOCPROV', nullable: false })
    razonSocial: string;

    @Column({ name: 'RUCPROV', nullable: false })
    rucProveedor: string;

    @Column({ name: 'EMAIPROV', nullable: false })
    correoProveedor: string;

    @Column({ name: 'CELPROV', nullable: false })
    celularProveedor: string;

    @Column({ name: 'DIRPROV', nullable: false })
    direccionProveedor: string;

    @Column({ name: 'ESTPROV', nullable: false })
    estadoProveedor: string;

    @OneToOne(() => UbigeoEntity)
    @JoinColumn({name: 'CODUBI'})
    ubigeo: UbigeoEntity;
}