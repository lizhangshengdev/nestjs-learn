import { Controller, Get, Post, Param, Query, Body,Req, Ip, Headers, ValidationPipe, Patch } from '@nestjs/common';
import { CreateUsersDto } from './dtos/create-users.dto';
import { GetUsersDto } from './dtos/get-users.dto';
import { PatchUserDto } from './dtos/patch-users.dto';
import { UsersService } from './providers/users.service';
@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
  ){}

  @Get('/')
  public getAllUsers() {
    return "获取所有用户";
  }

  @Get('/:id')
  public getUser(@Param() getUsersDto: GetUsersDto, @Query('limit') query:any) {
   
    console.log(getUsersDto);
    console.log(query);
    // return `获取用户 ${getUsersDto.id}`;
    return  this.usersService.findAll(getUsersDto);
  }

  // @Post()
  // public createUser(@Body() request:any, @Headers() header:any,@Ip() ip:any) {
  //   console.log("请求体")
  //   console.log(header)
  //   console.log(ip)
  //   return "创建";
  // }

  @Post()
  public createUser(@Body(new ValidationPipe()) createUsersDto:CreateUsersDto) {
    console.log(createUsersDto)
    return "创建";
  }

  @Patch()
  public patchUser(@Body() patchUserDto:PatchUserDto) {
    return patchUserDto;
  }
}