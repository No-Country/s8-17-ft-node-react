import { IsNotEmpty, IsString, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Difficulty } from '../../utils/types';
import { Ref } from '@typegoose/typegoose';
import { Diet } from '../../models/diet.model';
import { Category } from '../../models/category.model';
import { Type } from 'class-transformer';

export class TimeDto {
  @IsNumber()
  preparation: number;

  @IsNumber()
  cooking: number;

  @IsNumber()
  total: number;
}

export class Values {
    @IsNumber()
    calories: number;
  
    @IsNumber()
    fat: number;
  
    @IsNumber()
    carbohydrates: number;
  
    @IsNumber()
    protein: number;
  
    @IsNumber()
    cholesterol: number;
  }

export class NutritionalValueDto {
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Values)
  of100g: Values;

  @IsNotEmpty()
  ofPortion: Values;
}



export class SaveRecipeDto {
  @IsString()
  @IsNotEmpty({
    message: 'Name is required',
  })
  name: string;

  @IsString()
  @IsNotEmpty({
    message: 'Description is required',
  })
  description: string;

  @IsArray({
    message: 'Steps is required',
  })
  @IsNotEmpty({
    message: 'Steps is required',
  })
  @ValidateNested({ each: true })
  steps: string[];

  @IsNotEmpty({
    message: 'Ingredients is required',
  })
  @IsArray()
  @IsString({ each: true })
  ingredients: string[];

  @IsNotEmpty({
    message: 'Diets is required',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Diet)
  diets: Ref<Diet>[];

  @IsNotEmpty({
    message: 'Categories is required',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() =>Category)
  categories: Ref<Category>[];

  @IsEnum(Difficulty)
  difficulty: Difficulty;

  @IsNotEmpty({
    message: 'Time is required',
  })
  @ValidateNested()
  @Type(() => TimeDto)
  time: TimeDto;

  @IsNotEmpty({
    message: 'Portions is required',
  })
  @IsNumber()
  portions: number;

  @IsNotEmpty({
    message: 'Nutritional value is required',
  })
  @ValidateNested()
  @Type(() => NutritionalValueDto)
  nutritionalValue: NutritionalValueDto;
}
