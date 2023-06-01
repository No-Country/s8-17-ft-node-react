import { IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class UserSubscriptionDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  paymentMethod: string;
}
