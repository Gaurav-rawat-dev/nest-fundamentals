import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
  UseFilters,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { userService } from './userservice.service';
import { HttpExceptionFilter } from 'src/exception-filters/http-exception';
import {  CreateUserDTO } from './userdto/user.dto';



@Controller('user')
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private userService: userService) { }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const users = await this.userService.findAll();
    // @ts-ignore
    res.json(users)
    // throw new BadRequestException('this is an error', HttpStatus.BAD_REQUEST);
    // throw new BadRequestException("bad request", HttpStatus.BAD_REQUEST)
  }


  @Post()
  // @UsePipes(ValidationPipe)
  async create(
    @Res() res: Response,
    @Body() createUserDto: CreateUserDTO,
  ): Promise<any> {
    console.log(createUserDto, "=========")
    const newUser = await this.userService.create(createUserDto);
    // @ts-ignore
    res.json(newUser);
  }

  // @Get()
  // findAll(@Req() request: Request) : any {
  //     return this.userService.findAll()
  // }

  // @Get('intern')
  // findUser(@Query('role') role: string ){
  //     return this.userService.findUser(role)
  // }
}
