import { IsEmail, IsNotEmpty, Matches } from "class-validator";

export class UserLoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: "Password needs an uppercase letter, a lowercase letter and a number"
  })
  password: string;
}
