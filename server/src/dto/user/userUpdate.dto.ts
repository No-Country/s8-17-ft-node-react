import { IsOptional, IsString, IsNotEmpty, Length, Matches } from "class-validator";

export class UserUpdateDto {
  @IsNotEmpty()
  @IsString({
    message: "Invalid id"
  })
  id: string;

  @IsNotEmpty()
  @IsString({
    message: "Invalid password"
  })
  password: string;

  @IsOptional()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      "New password needs an uppercase letter, a lowercase letter, a number and a minimum length of 8 characters"
  })
  newPassword?: string;

  @IsOptional()
  @Length(3, 40)
  @IsString({
    message: "Invalid name"
  })
  name?: string;

  @IsOptional()
  image?: string;
}
