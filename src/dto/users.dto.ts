import { IsNotEmpty } from "class-validator";
import { IsEmail } from "class-validator";

export class UserDto{
  @IsNotEmpty()
    fullname: string;

   @IsEmail()
    email: string;

    @IsNotEmpty()
    age: number;

    @IsNotEmpty()
    country: string;

}