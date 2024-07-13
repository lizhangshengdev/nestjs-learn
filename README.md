# NestJS

1.模块化

2.可扩展性

```
echo "# nestjs-learn" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/lizhangshengdev/nestjs-learn.git
git push -u origin main
```

```
npm install -g @nestjs/cli
nest new nest-intro --dry-run
nest new nest-intro

nest generate module xxxxx
nest generate controller xxxx
nest generate resource xxxx
```

```
import { Controller, Get, Post, Param, Query, Body,Req } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/')
  public getAllUsers() {
    return "获取所有用户";
  }

  @Get('/:id')
  public getUser(@Param('id') id: string, @Query() query:any) {
    console.log(id);
    console.log(query);
    return `获取用户 ${id}`;
  }

  @Post()
  public createUser(@Body() request:any) {
    console.log("请求体")
    return "创建";
  }

  @Post()
  public createUser2(@Req() request:Request) {
    console.log("这边是拦截所有请求")
    return "创建";
  }
}
```

