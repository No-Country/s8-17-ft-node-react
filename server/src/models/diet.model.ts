import { getModelForClass, prop } from "@typegoose/typegoose";
import { IsNotEmpty, IsString } from "class-validator";
import { v4 as uuidv4 } from "uuid";

export class Diet {
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
    required: true
  })
  @IsNotEmpty()
  @IsString()
  public description!: string;
}

const DietModel = getModelForClass(Diet);
export default DietModel;
