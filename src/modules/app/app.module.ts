import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { ImagesModule } from '../images/images.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configuretions from '../../configurations';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuretions] }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configServise: ConfigService) => ({
        dialect: 'postgres',
        host: configServise.get('db_host'),
        port: configServise.get('db_port'),
        username: configServise.get('db_user'),
        password: configServise.get('db_password'),
        database: configServise.get('db_name'),
        synchronize: true,
        autoLoadModels: true,
        models: [],
      }),
    }),
    UserModule,
    ImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
