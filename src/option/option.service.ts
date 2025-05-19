import { Get, Injectable } from '@nestjs/common';
import { userService } from 'src/user/userservice.service';

@Injectable()
export class OptionService {
    constructor(private userService: userService){}
    
    @Get()
    findAll() : any {
        return this.userService.findAll()
    }
}
