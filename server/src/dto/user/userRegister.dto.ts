import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";

export class UserRegisterDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  password: string;

  @IsNotEmpty()
  @Length(3, 40)
  name: string;
}
