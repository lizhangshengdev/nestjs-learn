import { Controller, Get, Post, Param, Query, Body,Req, Ip, Headers } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/')
  public getAllUsers() {
    return "获取所有用户";
  }

  @Get('/:id/:optional?')
  public getUser(@Param('id') id: string, @Query('limit') query:any) {
    console.log(id);
    console.log(query);
    return `获取用户 ${id}`;
  }

  @Post()
  public createUser(@Body() request:any, @Headers() header:any,@Ip() ip:any) {
    console.log("请求体")
    console.log(header)
    console.log(ip)
    return "创建";
  }

  @Post()
  public createUser2(@Req() request:Request) {
    console.log("这边是拦截所有请求")
    return "创建";
  }
}