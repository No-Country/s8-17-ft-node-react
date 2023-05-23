import { Request, Response } from "express";
import { DietService } from "../services/diet.service";

export class DietController {
  constructor(private dietService: DietService) {}

  async getAll(_req: Request, res: Response): Promise<Response> {
    try {
      const diets = await this.dietService.getAll();
      return res.status(200).json(diets);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
