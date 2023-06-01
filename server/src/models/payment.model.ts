import { Ref, getModelForClass, prop } from "@typegoose/typegoose";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";
import { v4 as uuidv4 } from "uuid";
import { PaymentStatus } from "../utils/types";
import { User } from "./user.model";

export class Payment {
  @prop({
    required: true,
    unique: true,
    default: uuidv4
  })
  public id!: string;

  @prop({
    required: true,
    ref: () => "User"
  })
  userDb!: Ref<User | any>;

  @prop({
    required: true
  })
  public stripeId!: string;

  @prop({
    required: true
  })
  @IsNotEmpty()
  public status!: PaymentStatus;

  @prop({
    required: true
  })
  @IsNotEmpty()
  @IsDate()
  public creationDate!: Date;

  @prop({
    required: true
  })
  @IsNotEmpty()
  @IsNumber()
  public amount!: number;

  // constructor(partial: Partial<Payment>) {
  //   Object.assign(this, partial);
  // }
}

const PaymentModel = getModelForClass(Payment);
export default PaymentModel;
