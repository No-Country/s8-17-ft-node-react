import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  async getAll(_req: Request, res: Response): Promise<Response> {
    try {
      const categories = await this.categoryService.getAll();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
