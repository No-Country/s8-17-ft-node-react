import { UserRoles } from "../utils/types";
import { User } from "../models/user.model";

const usersToSeed: Array<Partial<User>> = [
  {
    name: "John",
    email: "Test@example.com",
    password: "Pass1234",
    alerts: ["lactosa"],
    favIngredients: ["tomato"],
    role: UserRoles.MASTER_CHEF
  },
  {
    name: "Mary",
    email: "Test2@example.com",
    password: "Pass1234",
    role: UserRoles.SEMI_CHEF
  },
  {
    name: "William",
    email: "Test3@example.com",
    password: "Pass1234",
    role: UserRoles.FREE
  }
];

export default usersToSeed;
