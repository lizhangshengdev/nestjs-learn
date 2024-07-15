import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist:true, //dto里面有什么就传什么 多写的不会传
      forbidNonWhitelisted:true, //多写的会直接报错
      transform:true
    }
  ))

  const config = new DocumentBuilder()
  .setTitle('Api文档')
  .setDescription('创作者: Mikey')
  .addServer('localhost:3000')
  .setVersion('1.0').build();

  const document = SwaggerModule.createDocument(app,config);

  SwaggerModule.setup('api',app,document)

  await app.listen(3000);
}
bootstrap();
