import { Module } from '@nestjs/common';
import { UserController } from './usercontroller.controller';
import { userService } from './userservice.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [ userService],
  exports : [userService]
})
export class UserModule {}
