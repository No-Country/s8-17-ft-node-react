import { IsEmail, IsOptional, IsString } from "class-validator";

export class GoogleAuthDto {
  @IsString({
    message: "Invalid id"
  })
  id: string;

  @IsString({
    message: "Invalid name"
  })
  name: string;

  @IsString({
    message: "Invalid email"
  })
  @IsEmail({
    allow_display_name: true,
    ignore_max_length: true
  })
  email: string;

  @IsOptional()
  image?: string;

  @IsOptional()
  accessToken?: string;

  @IsOptional()
  refreshToken?: string;
}
