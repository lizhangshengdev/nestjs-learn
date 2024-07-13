import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist:true, //dto里面有什么就传什么 多写的不会传
      forbidNonWhitelisted:true, //多写的会直接报错
      transform:true
    }
  ))
  await app.listen(3000);
}
bootstrap();
