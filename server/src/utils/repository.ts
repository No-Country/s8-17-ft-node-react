import { ReturnModelType, DocumentType, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";

class Repository<T> {
  
  public model: ReturnModelType<new () => T>;
  constructor(model: ReturnModelType<new () => T>) {
    this.model = model;
  }
  public async findById(id: string, populate?: any[]): Promise<DocumentType<T> | null> {
    let query : any = await this.model.findOne({
      id
    });
    if (populate && populate.length > 0) {
      for (const ref of populate) {
        query = query.populate(ref);
      }
    }
    const result = await query.exec();
    return result;
  }

  public async findOne(filter: Partial<T>): Promise<DocumentType<T> | null> {
    return this.model.findOne(filter);
  }

  public async findAll(props:{
    fields?: string[] ,
    skip?: number,
    limit?: number
    filter?: Partial<T>,
    sort?: Partial<T>
    populate?: any[] 

  }): Promise<DocumentType<T>[]> {
    let query : any = this.model.find(props.filter, props.fields);
    // Aquí se aplica populate() para cargar las referencias
    if (props.populate && props.populate.length > 0) {
      for (const ref of props.populate) {
        query = query.populate(ref);
      }
    }
    const result = await query.exec();
    return result;
  }
  

  public async findAllByRef(filter?: Ref<T>[], fields?: any): Promise<DocumentType<T>[] | null> {
    return await this.model.find({ _id: { $in: filter } }, fields);
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
