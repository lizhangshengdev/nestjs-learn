import {  IsString, IsNotEmpty, IsOptional, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateUsersDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
