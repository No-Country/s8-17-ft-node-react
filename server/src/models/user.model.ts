import { Prop, Ref, getModelForClass } from "@typegoose/typegoose";
import { IsNotEmpty, IsString } from "class-validator";
import { v4 as uuidv4 } from "uuid";
import { Diets } from "./diets.model";
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

  @Prop({
    required: false,
    type: () => String,
    ref: Diets
  })
  public recipeFav: Ref<Diets>[]; 

}
export const UserModel = getModelForClass(User);

