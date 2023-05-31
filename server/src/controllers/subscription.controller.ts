import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { SubscriptionService } from "../services/subscription.service";
import { User } from "../models/user.model";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { UserSubscriptionDto } from "../dto/user/userSubscription.dto";
import { Subscription } from "../models/subscription.model";

export class SubscriptionController {
  constructor(private userService: UserService, private subscriptionService: SubscriptionService) {}

  async subscribe(req: Request, res: Response): Promise<Response> {
    const { subscriptionId } = req.params;

    try {
      const partialUser: Partial<User> = { id: res.locals.jwtPayload.id };
      const user: User = await this.userService.findOne(partialUser);
      if (!user) return res.status(404).json({ errorMessage: "User not found" });

      const subscription: Subscription = await this.subscriptionService.getById(subscriptionId);
      if (!subscription)
        return res.status(404).json({
          errorMessage: "Subscription not found"
        });

      const session = await this.subscriptionService.subscribe(user, subscription);

      return res.status(200).json({
        session
      });
    } catch (err: any) {
      return res.status(500).json({
        errorMessage: err.message
      });
    }
    //// ---------------------------------
    // const userSubscriptionDto = plainToClass(UserSubscriptionDto, req.body);
    // const errors = await validate(userSubscriptionDto);

    // if (errors.length > 0) {
    //   return res.status(400).json(errors.map(err => err.constraints));
    // }

    // try {
    //   // Create a customer
    //   const customer = await stripe.customers.create({
    //     payment_method: paymentMethod,
    //     email: email,
    //     invoice_settings: {
    //       default_payment_method: paymentMethod
    //     }
    //   });

    //   // Create a product
    //   // Nota: Estas son las suscripciones que deberemos guardar en la db y con las cuales trabajaremos
    //   const product = await stripe.products.create({
    //     name: "Monthly subscription"
    //   });

    //   // Create a subscription
    //   const subscription = await stripe.subscriptions.create({
    //     customer: customer.id,
    //     items: [
    //       {
    //         price_data: {
    //           currency: "USD",
    //           product: product.id,
    //           unit_amount: "500",
    //           recurring: {
    //             interval: "month"
    //           }
    //         }
    //       }
    //     ],
    //     payment_settings: {
    //       payment_method_types: ["card"],
    //       save_default_payment_method: "on_subscription"
    //     },
    //     expand: ["latest_invoice.payment_intent"]
    //   });

    //   // Send back the client secret
    //   return res.status(200).json({
    //     clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    //     status: subscription.latest_invoice.payment_intent.status,
    //     subscriptionId: subscription.id
    //   });
    // } catch (error: any) {
    //   console.error(error);
    //   return res.status(500).json({ errorMessage: error.raw.message });
    // }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const subscriptions = await this.subscriptionService.getAll();
      return res.status(200).json(subscriptions);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  }
}
