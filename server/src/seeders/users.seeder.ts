import { User } from "../models/user.model";

const usersToSeed: Array<Partial<User>> = [
  {
    name: "John",
    email: "john@example.com",
    password: "Pass1234"
  },
  {
    name: "Mary",
    email: "mary@example.com",
    password: "Pass1234"
  },
  {
    name: "William",
    email: "william@example.com",
    password: "Pass1234"
  }
];

export default usersToSeed;
