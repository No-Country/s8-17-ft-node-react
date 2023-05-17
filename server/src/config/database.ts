import mongoose from "mongoose";

export class DataBase {
  public static async initialize() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  }
}
