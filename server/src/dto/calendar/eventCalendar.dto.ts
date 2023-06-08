import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsDate, IsEnum } from "class-validator";
import { RecipeDto } from "../recipe/recipe.dto";
import { Moment,DayOfWeek } from "../../utils/types";

export class EventCalendarDto {
    @IsNotEmpty({
        message: "Moment is required"
    })
    @IsEnum(Moment)
    moment: Moment;

    @IsNotEmpty({
        message: "DayOfWeek is required"
    })
    @IsEnum(DayOfWeek)
    dayOfWeek: DayOfWeek;
}
