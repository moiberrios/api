import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/feed.module';
// import { CrudEjemplarModule } from './crud-ejemplar/crud-ejemplar.module';
// import { CrudEntrenadorModule } from './crud-entrenador/crud-entrenador.module';
// import { CrudJineteModule } from './crud-jinete/crud-jinete.module';
// import { CrudStudModule } from './crud-stud/crud-stud.module';
// import { CrudCarreraModule } from './crud-carrera/crud-carrera.module';
// import { CrudPropietarioModule } from './crud-propietario/crud-propietario.module';
// import { CrudUsuarioModule } from './crud-usuario/crud-usuario.module';
import { UsuarioModule } from './usuario/usuario.module';
// import { CrudRolModule } from './crud-rol/crud-rol.module';
// import { CrudCompraModule } from './crud-compra/crud-compra.module';
// import { CrudUsuarioModule } from './crud-usuario/crud-usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    FeedModule,
    // CrudEjemplarModule,
    // CrudEntrenadorModule,
    // CrudJineteModule,
    // CrudStudModule,
    // CrudCarreraModule,
    // CrudPropietarioModule,
    // CrudUsuarioModule,
    // CrudRolModule,
    // CrudCompraModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
