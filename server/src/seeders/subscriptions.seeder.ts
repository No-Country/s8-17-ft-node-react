import { UserRoles } from "../utils/types";
import { Subscription } from "../models/subscription.model";

const subscriptionsToSeed: Array<Partial<Subscription>> = [
  {
    name: "Semi Chef",
    price: 200,
    stripeId: "price_1NDubpDK9I5lglt6glRfKhEV",
    role: UserRoles.SEMI_CHEF
  },
  {
    name: "Master Chef",
    price: 500,
    stripeId: "price_1NDvigDK9I5lglt6VVAlIYuq",
    role: UserRoles.MASTER_CHEF
  }
];

export default subscriptionsToSeed;
