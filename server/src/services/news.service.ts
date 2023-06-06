import Repository from "../utils/repository";
import NewsModel, { News } from "../models/news.model";

export class NewsService {
  private newsRepository: Repository<News> = new Repository(NewsModel);

  public async getAll(): Promise<Array<News>> {
    const newsFromDb = await this.newsRepository.findAll({
      fields: ["-_id", "-__v"]
    });
    return newsFromDb;
  }
}
