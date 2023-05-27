import Repository from "../utils/repository";
import DietModel, { Diet } from "../models/diet.model";

export class DietService {
  private dietRepository: Repository<Diet> = new Repository(DietModel);

  public async getAll(): Promise<Array<Diet>> {
    const dietsFromDb = await this.dietRepository.findAll(
      {
        fields:['id', 'name', 'description']
      },
    );

    return dietsFromDb;
  }
}
