import { Prop, getModelForClass } from "@typegoose/typegoose";
import { IsNotEmpty, IsString } from "class-validator";
import { v4 as uuidv4 } from "uuid";
export class User{

  @Prop({
    required: true,
    unique: true,
    default: uuidv4,
  })
  id: string;

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

