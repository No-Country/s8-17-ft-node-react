import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";

export class UserRegisterDto {
  @IsNotEmpty()
  @Length(3, 40)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      "Password needs an uppercase letter, a lowercase letter, a number and a minimum length of 8 characters"
  })
  password: string;
}
