import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exception-filters/http-exception';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({
   whitelist: true, // Strip properties that do not use decorators
      forbidNonWhitelisted: true, // Throw error on extra fields
      transform: true, // Automatically transform payloads to DTO instances
  }))
  await app.listen(process.env.PORT || 6000);
}
bootstrap();
