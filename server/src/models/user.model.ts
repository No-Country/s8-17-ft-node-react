import { Prop, getModelForClass } from "@typegoose/typegoose";
import { IsNotEmpty, IsString } from "class-validator";
export class User{
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  public name!: string;
  @Prop({
    required: true,
    unique: true,
  })
  public email!: string;
  @Prop()
  public password: string;

}
export const UserModel = getModelForClass(User);

