import { getModelForClass, prop } from "@typegoose/typegoose";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { UserRoles } from "../utils/types";
import { v4 as uuidv4 } from "uuid";

export class Subscription {
  @prop({
    required: true,
    unique: true,
    default: uuidv4
  })
  public id!: string;

  @prop({
    required: true,
    unique: true
  })
  public stripeId!: string;

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
  @IsNumber()
  public price!: number;

  @prop({
    required: false
  })
  @IsString()
  public description?: string;

  @prop({
    required: false
  })
  @IsString()
  public image?: string;

  @prop({
    required: false,
    enum: UserRoles
  })
  public role?: UserRoles;
}

const SubscriptionModel = getModelForClass(Subscription);
export default SubscriptionModel;
