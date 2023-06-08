import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { User } from "../models/user.model";
import { Recipe } from "../models/recipe.model";
import { RecipeService } from "../services/recipe.service";
import { UserService } from "../services/user.service";
import { EventCalendarDto } from "../dto/calendar/eventCalendar.dto";
import { EventService } from "../services/event.service";

export class EventController {
  constructor(private eventService: EventService, private userService: UserService, private recipeService: RecipeService) {}

  async addRecipe(req: Request, res: Response): Promise<Response> {
    try {
      const addEventDto = plainToClass(EventCalendarDto, req.body);
      const errors = await validate(addEventDto);

      if (errors.length > 0) {
        return res.status(400).json(errors.map(err => err.constraints));
      }

      const user: User = await this.userService.findById(res.locals.jwtPayload.id);
      if (!user) return res.status(404).json({ message: "User not found" });

      const recipe: Recipe = await this.recipeService.getById(req.params.recipeId);
      if (!recipe) return res.status(404).json({ message: "Recipe not found" });

      const event = await this.eventService.addRecipe(user, recipe, addEventDto);

      return res.status(200).json({ message: "Event created" });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deleteRecipe(req: Request, res: Response): Promise<Response> {
    try {
      const deleteEventDto = plainToClass(EventCalendarDto, req.body);
      const errors = await validate(deleteEventDto);

      if (errors.length > 0) {
        return res.status(400).json(errors.map(err => err.constraints));
      }

      const user: User = await this.userService.findById(res.locals.jwtPayload.id);
      if (!user) return res.status(404).json({ message: "User not found" });

      const recipe: Recipe = await this.recipeService.getById(req.params.recipeId);
      if (!recipe) return res.status(404).json({ message: "Recipe not found" });

      const event = await this.eventService.deleteRecipe(user, deleteEventDto);

      return res.status(200).json({ message: "Event deleted" });
    } catch(error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
