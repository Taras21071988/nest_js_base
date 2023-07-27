import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { ImagesModule } from '../images/images.module';
import { ConfigModule } from '@nestjs/config';
import configuretions from '../../configurations';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuretions] }),
    UserModule,
    ImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
