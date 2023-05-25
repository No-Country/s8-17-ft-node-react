import { Ref, getModelForClass, prop } from "@typegoose/typegoose";
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

  @prop({ ref: () => Recipe, required: false })
  public favRecipes?: Ref<Recipe>[];

  @prop({
    required: false
  })
  public alerts?: string[];


  @prop({
    required: false
  })
  public ingredientsFav?: string[];

}

const UserModel = getModelForClass(User);
export default UserModel;
