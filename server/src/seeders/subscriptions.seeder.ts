import { Subscription } from "../models/subscription.model";

const subscriptionsToSeed: Array<Partial<Subscription>> = [
  {
    name: "Semi Chef",
    price: 200,
    stripeId: "price_1NDubpDK9I5lglt6glRfKhEV"
  },
  {
    name: "Master Chef",
    price: 500,
    stripeId: "price_1NDvigDK9I5lglt6VVAlIYuq"
  }
];

export default subscriptionsToSeed;
