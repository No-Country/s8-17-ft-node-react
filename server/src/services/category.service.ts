import Repository from "../utils/repository";
import CategoryModel, { Category } from "../models/category.model";

export class CategoryService {
  private categoryRepository: Repository<Category> = new Repository(CategoryModel);

  public async getAll(): Promise<Array<Category>> {
    const categoriesFromDb = await this.categoryRepository.findAll(
      {},
      { id: 1, name: 1, description: 1, _id: 0 }
    );

    return categoriesFromDb;
  }
}
