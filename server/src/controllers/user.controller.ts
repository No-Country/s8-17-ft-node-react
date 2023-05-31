import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export class UserController {
  constructor(private userService: UserService) {}

  async subscribe(req: Request, res: Response): Promise<Response> {
    const { email, paymentMethod } = req.body;

    try {
      // Create a customer
      const customer = await stripe.customers.create({
        payment_method: paymentMethod,
        email: email,
        invoice_settings: {
          default_payment_method: paymentMethod
        }
      });

      // Create a product
      // Nota: Estas son las suscripciones que deberemos guardar en la db y con las cuales trabajaremos
      const product = await stripe.products.create({
        name: "Monthly subscription"
      });

      // Create a subscription
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [
          {
            price_data: {
              currency: "USD",
              product: product.id,
              unit_amount: "500",
              recurring: {
                interval: "month"
              }
            }
          }
        ],
        payment_settings: {
          payment_method_types: ["card"],
          save_default_payment_method: "on_subscription"
        },
        expand: ["latest_invoice.payment_intent"]
      });

      // Send back the client secret
      return res.status(200).json({
        clientSecret: subscription.latest_invoice.payment_intent.client_secret,
        status: subscription.latest_invoice.payment_intent.status,
        subscriptionId: subscription.id
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ errorMessage: error.raw.message });

    }
  }
}
