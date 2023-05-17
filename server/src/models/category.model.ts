import { Prop, getModelForClass } from "@typegoose/typegoose";
import { v4 as uuidv4 } from "uuid";

export class Category {
    @Prop({
        required: true,
        unique: true,
        default: uuidv4,
    })
    @Prop({
        required: true,
    })
    public name: string;
    @Prop({
        required: true,
    })
    public description: string; 
}

const CategoryModel = getModelForClass(Category);
export default CategoryModel;