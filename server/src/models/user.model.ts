import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { IsNotEmpty, IsString } from "class-validator";
import { v4 as uuidv4 } from "uuid";
import { Recipe } from "./recipe.model";

export class User {
  @prop({
    required: true,
    unique: true,
    default: uuidv4
  })
  public id!: string;

  @prop({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  public name!: string;

  @prop({
    required: true,
    unique: true
  })
  @IsNotEmpty()
  @IsString()
  public email!: string;

  @prop({
    required: false
  })
  public password?: string;

  @prop({
    required: false,
    ref: Recipe
  })
  public favRecipes?: Ref<Recipe>[];
}

const UserModel = getModelForClass(User);
export default UserModel;
