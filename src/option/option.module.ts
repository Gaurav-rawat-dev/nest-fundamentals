import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [OptionController],
  providers: [OptionService],
  imports : [UserModule]
  
})
export class OptionModule {}
