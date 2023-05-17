import { IsEmail, IsNotEmpty, Matches } from "class-validator";

export class UserLoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: "Password too weak"
  })
  password: string;
}
