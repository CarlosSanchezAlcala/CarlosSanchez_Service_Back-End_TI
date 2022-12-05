import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'PRODUCTO' })
export class ProductoEntity {

    @PrimaryColumn({ name: 'IDPROD', nullable: false })
    idProducto: number;

    @Column({ name: 'NOMPROD', nullable: false })
    nombreProducto: string;

    @Column({ name: 'TIPOPROD', nullable: false })
    tipoProducto: string;

    @Column({ name: 'DESPROD', nullable: false })
    descripcionProducto: string;

    @Column({ name: 'PREPROD', nullable: false })
    precioProducto: number;

    @Column({ name: 'STOCKPROD', nullable: false })
    stockProducto: number;

    @Column({ name: 'ESTPROD', nullable: false })
    estadoProducto: string;
}