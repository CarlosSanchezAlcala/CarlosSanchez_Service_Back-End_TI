import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'UBIGEO' })
export class UbigeoEntity {
    @PrimaryColumn({ name: 'CODUBI', nullable: false })
    id: string;

    @Column({ name: 'DEPAR', nullable: false })
    departamento: string;

    @Column({ name: 'PROVI', nullable: false })
    provincia: string;

    @Column({ name: 'DISTRI', nullable: false })
    distrito: string;
}