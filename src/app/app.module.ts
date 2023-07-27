import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { ImagesModule } from '../images/images.module';

@Module({
  imports: [UserModule, ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
