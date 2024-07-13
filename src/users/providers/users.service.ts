import { Injectable } from "@nestjs/common";
import { GetUsersDto } from "../dtos/get-users.dto";

@Injectable()
export class UsersService {

  public findAll(getUsersDto:GetUsersDto){
    
    return [
      {
        firstName:"111",
        email:"ssss"
      }
    ]
  }
}