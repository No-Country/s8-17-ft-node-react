import { Request, Response } from "express";
import { NewsService } from "../services/news.service";

export class NewsController {
  constructor(private newsService: NewsService) {}

  async getAll(_req: Request, res: Response): Promise<Response> {
    try {
      const news = await this.newsService.getAll();
      return res.status(200).json(news);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
