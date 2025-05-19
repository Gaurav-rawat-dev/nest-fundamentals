import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OptionModule } from './option/option.module';
import { LoggerMiddleware } from './middlewares/logger';

@Module({
  imports: [UserModule, OptionModule],
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
