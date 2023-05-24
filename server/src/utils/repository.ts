import { ReturnModelType, DocumentType } from "@typegoose/typegoose";

class Repository<T> {
  public model: ReturnModelType<new () => T>;
  constructor(model: ReturnModelType<new () => T>) {
    this.model = model;
  }
  public async findById(id: string): Promise<DocumentType<T> | null> {
    return this.model.findById(id);
  }

  public async findOne(filter: Partial<T>): Promise<DocumentType<T> | null> {
    return this.model.findOne(filter);
  }

  public async findAll(filter?: Partial<T>, fields?: any): Promise<DocumentType<T>[]> {
    return this.model.find(filter, fields);
  }

  public async create(data: Partial<T>): Promise<DocumentType<T>> {
    const model = new this.model(data) as DocumentType<T>;
    await model.save();
    return model;
  }

  public async createAll(data: T[]): Promise<DocumentType<T>> {
    const model = new this.model(data) as DocumentType<T>;
    await model.save();
    return model;
  }

  public async update(
    id: Partial<T>,
    data: any,
    options?: boolean
  ): Promise<DocumentType<T> | null> {
    return this.model.findOneAndUpdate(id, data, { upsert: options });
    // return this.model.findOneAndUpdate({ id }, { $set: data }, { upsert: options ?? false });
  }

  public async delete(id: string): Promise<DocumentType<T> | null> {
    return this.model.findByIdAndDelete(id);
  }

  public async deleteAll(filter: Partial<T>): Promise<void> {
    await this.model.deleteMany({
      ...filter
    });
  }

  public async count(filter: Partial<T>): Promise<number> {
    return this.model.countDocuments({
      ...filter
    });
  }

  public async save(filter: Partial<T>): Promise<DocumentType<T> | null> {
    return this.model.findOneAndUpdate(filter, { $set: filter }, { upsert: true });
  }
}

export default Repository;
