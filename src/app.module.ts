import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OptionModule } from './option/option.module';
import { LoggerMiddleware } from './middlewares/logger';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/config';
import { string } from 'zod';
import { ProductsModule } from './products/products.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-ioredis';

@Module({
  imports: [
    
    UserModule,
    OptionModule,
    ProductsModule,

    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('MONGODB_URI');
        console.log('Mongo URI:', uri); // ✅ Add this
        return { uri };
      },
      inject: [ConfigService],
    }),

     CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: redisStore,
        host: 'localhost', // use 'localhost' if app is in Docker too
        port: 6379,
        ttl: 1000000,
      }),
    }),

  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) // apply our middleware
      .forRoutes('*');
  }
}
