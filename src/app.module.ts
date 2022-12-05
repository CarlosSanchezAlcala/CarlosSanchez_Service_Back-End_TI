import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UbigeoEntity} from "./entities/ubigeo.entity";
import {UbigeoController} from "./controllers/ubigeo.controller";
import {UbigeoService} from "./services/ubigeo.service";
import {ClienteEntity} from "./entities/cliente.entity";
import {ClienteController} from "./controllers/cliente.controller";
import {ClienteService} from "./services/cliente.service";
import {UsuarioController} from "./controllers/usuario.controller";
import {UsuarioService} from "./services/usuario.service";
import {UsuarioEntity} from "./entities/usuario.entity";
import {ProveedorEntity} from "./entities/proveedor.entity";
import {ProveedorController} from "./controllers/proveedor.controller";
import {ProveedorService} from "./services/proveedor.service";
import {ProductoEntity} from "./entities/producto.entity";
import {ProductoService} from "./services/producto.service";
import {ProductoController} from "./controllers/producto.controller";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'CARLOS',
      password: '@abc123@',
      sid: 'xe',
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([UbigeoEntity]),
    TypeOrmModule.forFeature([ClienteEntity]),
    TypeOrmModule.forFeature([UsuarioEntity]),
    TypeOrmModule.forFeature([ProveedorEntity]),
    TypeOrmModule.forFeature([ProductoEntity]),
  ],
  controllers: [
    AppController,
    UbigeoController,
    ClienteController,
    UsuarioController,
    ProveedorController,
    ProductoController,
    AuthController,
  ],
  providers: [
    AppService,
    UbigeoService,
    ClienteService,
    UsuarioService,
    ProveedorService,
    ProductoService,
    AuthService,
  ],
})
export class AppModule {}
