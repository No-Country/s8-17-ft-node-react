import { User } from "../models/user.model";

const usersToSeed: Array<Partial<User>> = [
  {
    name: "John",
    email: "john@example.com",
    password: "pass123"
  },
  {
    name: "Mary",
    email: "mary@example.com",
    password: "pass123"
  },
  {
    name: "William",
    email: "william@example.com",
    password: "pass123"
  }
];

export default usersToSeed;
