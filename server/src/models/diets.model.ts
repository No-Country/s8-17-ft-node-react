import { getModelForClass, prop } from "@typegoose/typegoose";
import { v4 as uuidv4 } from "uuid";

export class Diets {
    @prop({
        required: true,
        unique: true,
        default: uuidv4,
    })
    public id: string;

    @prop({
        required: true,
    })
    public name: string;

    @prop({
        required: true,
    })
    public description: string; 

}

const DietsModel = getModelForClass(Diets);
export default DietsModel;