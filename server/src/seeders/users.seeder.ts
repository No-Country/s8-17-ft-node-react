import { User } from "../models/user.model";

const usersToSeed: Array<Partial<User>> = [
  {
    name: "John",
    email: "Test@example.com",
    password: "Pass1234",
    alerts:[
      "lactosa",
    ],
    ingredientsFav:[
      "tomato",
    ],
  },
  {
    name: "Mary",
    email: "Test2@example.com",
    password: "Pass1234"
  },
  {
    name: "William",
    email: "Test3@example.com",
    password: "Pass1234"
  }
];

export default usersToSeed;
