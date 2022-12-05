import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
import {UbigeoEntity} from "./ubigeo.entity";

@Entity({ name: 'USUARIO' })
export class UsuarioEntity {
    @PrimaryColumn({ name: 'IDUSU', nullable: false })
    idUsuario: number;

    @Column({ name: "NOMUSU", nullable: false })
    nombreUsuario: string;

    @Column({ name: 'APEPATUSU', nullable: false })
    apellidoPaternoUsuario: string;

    @Column({ name: 'APEMATUSU', nullable: false })
    apellidoMaternoUsuario: string;

    @Column({ name: 'DNIUSU', nullable: false })
    dniUsuario: string;

    @Column({ name: 'PASSUSU', nullable: false })
    claveUsuario: string;

    @Column({ name: 'LEVEUSU', nullable: false })
    nivelUsuario: string;

    @Column({ name: 'CORUSU', nullable: false })
    correoUsuario: string;

    @Column({ name: 'CELUSU', nullable: false })
    celularUsuario: string;

    @OneToOne(() => UbigeoEntity)
    @JoinColumn({name: 'CODUBI'})
    ubigeo: UbigeoEntity;

    @Column({ name: 'DIRUSU', nullable: false })
    direccionUsuario: string;

    @Column({ name: 'TURUSU', nullable: false })
    turnoUsuario: string;

    @Column({ name: 'ESTUSU', nullable: false })
    estadoUsuario: string;
}