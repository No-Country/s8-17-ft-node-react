import Repository from "../utils/repository";
import DietModel, { Diet } from "../models/diet.model";

export class DietService {
  private dietRepository: Repository<Diet> = new Repository(DietModel);

  public async getAll(): Promise<Array<Diet>> {
    const dietsFromDb = await this.dietRepository.findAll(
      {},
      { id: 1, name: 1, description: 1, _id: 0 }
    );

    return dietsFromDb;
  }
}
