import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Recipe } from "./recipe.model"
import { User } from "./user.model";
import { v4 as uuidv4 } from "uuid";
import { Moment } from "../utils/types";

export class Event {
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
  public title!: string;

  @prop({
    required: true
  })
  @IsDate()
  public date!: Date;

  @prop({ ref: () => Recipe, required: true})
  @IsString()
  public recipe!: Ref<Recipe>;

  @prop({
    required: true,
    enum: Moment
  })
  public moment: Moment;

  @prop({
    ref: () => "User",
    required: false
  })
  createdBy?: Ref<User | any>;

  constructor(partial: Partial<Recipe>) {
    Object.assign(this, partial);
  }
}

const EventModel = getModelForClass(Event);
export default EventModel;
