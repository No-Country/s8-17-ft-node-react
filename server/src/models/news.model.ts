import { getModelForClass, prop } from "@typegoose/typegoose";
import { IsNotEmpty, IsString } from "class-validator";
import { v4 as uuidv4 } from "uuid";

export class News {
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
  @IsNotEmpty()
  @IsString()
  public summary!: string;

  @prop({
    required: true,
    default: "https://assets.livelifegetactive.com/20200221121118/Sharing-food-with-friends.jpg"
  })
  @IsNotEmpty()
  @IsString()
  public image!: string;

  @prop({
    required: true
  })
  @IsNotEmpty()
  @IsString()
  public urlLink!: string;
}

const NewsModel = getModelForClass(News);
export default NewsModel;
