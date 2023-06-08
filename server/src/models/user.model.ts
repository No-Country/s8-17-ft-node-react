import { Ref, getModelForClass, prop } from "@typegoose/typegoose";
import { IsNotEmpty, IsString } from "class-validator";
import { v4 as uuidv4 } from "uuid";
import { Recipe } from "./recipe.model";
import { UserRoles } from "../utils/types";


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
    required: false
  })
  public stripeId?: string;

  @prop({ ref: () => Recipe, required: false })
  public favRecipes?: Ref<Recipe>[];

  @prop({
    required: false
  })
  public alerts?: string[];

  @prop({
    required: false
  })
  public favIngredients?: string[];

  @prop({
    required: false,
    enum: UserRoles,
    default: UserRoles.FREE
  })
  public role?: UserRoles;

  @prop({
    required: false
  })
  //TODO: crear la interface
  public subscription?: {
    active?: boolean;
    dateOfCreation: Date;
    dateOfUpdate: Date;
    dateOfExpiration: Date;
  };
  @prop({
    required: false,
    type: Array<Array< {
      name?: string,
      id?: string,
    } | null>>,
    default: [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ],
  })
  public weekCalendar: Array<Array< {
    name?: string,
    id?: string,
  } | null>>;
}

const UserModel = getModelForClass(User);
export default UserModel;
