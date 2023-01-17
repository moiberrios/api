import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/feed.module';
// import { UsuarioModule } from './usuario/usuario.module';
import { EjemplarModule } from './ejemplar/ejemplar.module';
import { EntrenadorModule } from './entrenador/entrenador.module';
import { JineteModule } from './jinete/jinete.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { StudModule } from './stud/stud.module';
import { UniformeModule } from './uniforme/uniforme.module';
import { CompraModule } from './compra/compra.module';
import { CarreraModule } from './carrera/carrera.module';
import { ApuestaModule } from './apuesta/apuesta.module';
import { Tipo_ApuModule } from './tipo_apu/tipo_apu.module';
import { RolModule } from './rol/rol.module';


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
      autoLoadEntities: true
      // synchronize: true,
    }),
    ApuestaModule,
    FeedModule,
    UsuarioModule,
    EjemplarModule,
    EntrenadorModule,
    JineteModule,
    AuthModule,
    StudModule,
    UniformeModule,
    CompraModule,
    CarreraModule,
    Tipo_ApuModule,
    RolModule,
    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
