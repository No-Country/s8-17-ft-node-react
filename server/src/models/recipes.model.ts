import { Prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { v4 as uuidv4 } from "uuid";
import { User } from "./user.model";
import { Diets } from "./diets.model";
import { Category } from "./category.model";
// import { Alert } from "./alert.model";

class Recipe {
  @Prop({
    required: true,
    unique: true,
    default: uuidv4
  })
  id: string; // is check

  @Prop({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  name: string; // is check

  @Prop({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  description: string; // is check

  @Prop({
    required: true
  })
  ingredients: string[]; // is check

  @Prop({
    required: true
  })
  steps: string[]; // is check

  @Prop({
    required: true
  })
  time: {
    // is check
    preparation: number;
    cooking: number;
    rest: number;
    total: number;
  };

  @Prop({
    required: true
  })
  @IsNotEmpty()
  @IsNumber()
  portions: number; // is check

  //   @Prop({ type: () => String, ref: Alert })
  //   alerts: Ref<Alert>[];

    @Prop({ type: () => String, ref: Diets, required: false })
    diets: Ref<Diets>[];

    @Prop({ type: () => String, ref: Category, required: false })
    category: Ref<Category>[];
    
  @Prop()
  difficulty: string;

  @Prop()
  image: string;

  @Prop()
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

  @Prop({ ref: User, required: true })
  createdBy: Ref<User>;
}


const RecipeModel = getModelForClass(Recipe);
export default RecipeModel;
