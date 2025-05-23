import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exception-filters/http-exception';
import { ValidationPipe } from '@nestjs/common';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const reflector = app.get(Reflector);
  // const cacheManager = app.get<Cache>(CACHE_MANAGER);
  // const httpAdapterHost  = app.get(HttpAdapterHost);   

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Strip properties that do not use decorators
    forbidNonWhitelisted: true, // Throw error on extra fields
    transform: true, // Automatically transform payloads to DTO instances
  }))
  // app.useGlobalInterceptors( new CacheInterceptor(cacheManager, reflector))
  await app.listen(process.env.PORT || 6000);
}
bootstrap();
