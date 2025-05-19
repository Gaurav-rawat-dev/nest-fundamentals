import { Controller, Get } from '@nestjs/common';
import { OptionService } from './option.service';
import { userService } from 'src/user/userservice.service';

@Controller('option')
export class OptionController {
  constructor(private readonly userService: userService) {}

  @Get()
    findAll() : any {
        return this.userService.findAll()
    }
}
