import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { UserLoginDto } from "./userLogin.dto";
export class UserRegisterDto extends UserLoginDto {
  @IsNotEmpty()
  @Length(3, 40)
  name: string;
}
