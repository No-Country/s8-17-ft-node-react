import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { v4 as uuidv4 } from "uuid";
import { Category } from "./category.model";
import { Diet } from "./diet.model";
import { User } from "./user.model";
// import { Alert } from "./alert.model";

class Recipe {
  @prop({
    required: true,
    unique: true,
    default: uuidv4
  })
  id: string; // is check

  @prop({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  name: string; // is check

  @prop({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  description: string; // is check

  @prop({
    required: true
  })
  @IsNotEmpty()
  ingredients: string[]; // is check

  @prop({
    required: true
  })
  @IsNotEmpty()
  steps: string[]; // is check

  @prop({
    required: true
  })
  @IsNotEmpty()
  time: {
    preparation: number;
    cooking: number;
    rest: number;
    total: number;
  }; // is check

  @prop({
    required: true
  })
  @IsNotEmpty()
  @IsNumber()
  portions: number; // is check

  // @Prop({ type: () => String, ref: Alert })
  // alerts: Ref<Alert>[];

  @prop({ type: () => String, ref: Category, required: false })
  category: Ref<Category>[];

  @prop({ type: () => String, ref: Diet, required: false })
  diets: Ref<Diet>[];

  @prop()
  difficulty: string;

  @prop()
  image: string;

  @prop()
  nutritionalValue: {
    of100g: {
      calories: number;
      fat: number;
      carbohydrates: number;
      protein: number;
      sugar: number;
      fiber: number;
      salt: number;
    };
    ofPortion: {
      calories: number;
      fat: number;
      carbohydrates: number;
      protein: number;
      sugar: number;
      fiber: number;
      salt: number;
    };
  };

  @prop({ ref: User, required: true })
  @IsNotEmpty()
  createdBy: Ref<User>;
}

const RecipeModel = getModelForClass(Recipe);
export default RecipeModel;
