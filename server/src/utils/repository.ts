import { ReturnModelType, DocumentType, Ref } from "@typegoose/typegoose";

class Repository<T> {
  public model: ReturnModelType<new () => T>;
  constructor(model: ReturnModelType<new () => T>) {
    this.model = model;
  }

  public async findById(id: any, props?: { populate?: any[] }): Promise<DocumentType<T> | null> {
    const query: any = await this.model
      .findOne({
        id
      })
      .populate(props?.populate)
      .exec();

    return query;
  }

  public async findOne(filter: Partial<T>): Promise<DocumentType<T> | null> {
    return this.model.findOne(filter);
  }

  public async findAll(props?: {
    fields?: string[];
    skip?: number;
    limit?: number;
    filter?: any;
    sort?: Partial<T>;
    populate?: any[];
  }): Promise<DocumentType<T>[]> {
    const query: any = await this.model
      .find(props?.filter, props?.fields)
      .limit(props?.limit)
      .skip(props?.skip)
      .populate(props?.populate)
      .exec();

    return query;
  }

  public async findAllByRef(
    filter?: Ref<T>[],
    props?: { populate?: any[] }
  ): Promise<DocumentType<T>[] | null> {
    const query: any = await this.model
      .find({ _id: { $in: filter } })
      .populate(props?.populate)
      .exec();

    return query;
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
    partial: Partial<T>,
    data: any,
    options?: boolean
  ): Promise<DocumentType<T> | null> {
    return this.model.findOneAndUpdate(partial, data, { upsert: options });
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

  public async findOrCreateMany(filters: Partial<T>[]): Promise<DocumentType<T>[]> {
    const queries = filters.map(async filter => {
      let result = await this.model.findOne(filter);
      if (!result) {
        result = await this.model.create(filter);
      }
      return result;
    });

    const items = await Promise.all(queries);
    return items.filter(Boolean) as DocumentType<T>[];
  }
}

export default Repository;
