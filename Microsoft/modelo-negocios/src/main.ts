import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Agregar el prefijo api a todo el proyecto
  app.setGlobalPrefix('api');

  //configurar las pipes de las clases validator y transformer
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      
    }),
  );

  await app.listen(envs.port);
  console.log(`Server running on port ${envs.port}`)
}
bootstrap();
