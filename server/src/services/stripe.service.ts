// import { Payment } from './../../entity/purchase/payment.entity';
// import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { User } from 'src/entity';
// import { StripeDto } from '../dto/stripe.dto';
// import { Purchase } from 'src/entity/purchase';

// @Injectable()
// export class StripeService {
//   private readonly logger = new Logger(StripeService.name);
//   private stripeClient: Stripe;

//   constructor(private configService: ConfigService) {
//     this.stripeClient = new Stripe(configService.get('STRIPE_SECRET_KEY'), {
//       apiVersion: null,
//     });
//   }

//   async createCustomer(user: User): Promise<Stripe.Customer> {
//     try {
//       const customer = await this.stripeClient.customers.create({
//         email: user.email,
//         name: `${user.firstName} ${user.lastName}`,
//         metadata: { userId: user.id },
//       });

//       return customer;
//     } catch (error) {
//       // If something went wrong, handle the error.
//       this.logger.error(`Error in customer create: ` + error);
//       throw new HttpException(
//         `Error in customer create: ` + error,
//         HttpStatus.SERVICE_UNAVAILABLE,
//       );
//     }
//   }

//   async getCustomer(
//     customerId: string,
//   ): Promise<Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>> {
//     try {
//       const customer = await this.stripeClient.customers.retrieve(customerId);

//       return customer;
//     } catch (error) {
//       // If something went wrong, handle the error.
//       this.logger.error(`Error in customer retrieve: ` + error);
//       throw new HttpException(
//         `Error in customer retrieve: ` + error,
//         HttpStatus.SERVICE_UNAVAILABLE,
//       );
//     }
//   }

//   async createPayment(
//     purchase: Purchase,
//     payment: Payment,
//     user: User,
//   ): Promise<StripeDto> {
//     const stripeDto = new StripeDto();

//     try {
//       stripeDto.request = {
//         amount: (payment.amount + payment.fee) * 100,
//         currency: 'USD',
//         customer: user.customerStripeId,
//         payment_method_types: ['card'],
//         receipt_email: user.email,
//         setup_future_usage: 'off_session' as any,
//         metadata: {
//           // purchaseId: purchase.id,
//           paymentId: payment.id,
//         },
//       };

//       stripeDto.intentResponse = await this.stripeClient.paymentIntents.create(
//         stripeDto.request,
//       );
//     } catch (error) {
//       // If something went wrong, handle the error.
//       this.logger.error(`Error in create payment intent: ` + error);
//       stripeDto.exception = error;
//     }

//     return stripeDto;
//   }

//   async confirmPayment(
//     payment: Payment,
//     user: User,
//   ): Promise<Stripe.Response<Stripe.PaymentIntent>> {
//     try {
//       const paymentConfirmation =
//         await this.stripeClient.paymentIntents.confirm(
//           payment.paymentIntentId,
//           {
//             receipt_email: user.email,
//             setup_future_usage: 'off_session',
//             error_on_requires_action: true,
//           },
//         );

//       return paymentConfirmation;
//     } catch (error) {
//       // If something went wrong, handle the error.
//       this.logger.error(`Error in confirmation of payment intent: ` + error);
//       throw new HttpException(
//         `Error in confirmation of payment intent: ` + error,
//         HttpStatus.SERVICE_UNAVAILABLE,
//       );
//     }
//   }
// }

import Stripe from "stripe";
import dotenv from "dotenv";
import { User } from "../models/user.model";
import { Subscription } from "../models/subscription.model";
dotenv.config();

export default class StripeService {
  private stripeClient: Stripe;
  constructor() {
    this.stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: null
    });
  }
  public async createCustomer(user: User): Promise<Stripe.Customer> {
    try {
      const customer = await this.stripeClient.customers.create({
        email: user.email,
        name: `${user.name}`,
        metadata: { userId: user.id }
      });

      return customer;
    } catch (error: any) {
      throw new Error(`Error in customer create: ${error.message}`);
    }
  }

  async getCustomer(
    customerId: string
  ): Promise<Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>> {
    try {
      const customer = await this.stripeClient.customers.retrieve(customerId);

      return customer;
    } catch (error: any) {
      throw new Error(`Error in customer create: ${error.message}`);
    }
  }

  public async createCheckout(
    user: User,
    subscription: Subscription,
    successUrl: string,
    cancelUrl: string
  ): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    try {
      const session = await this.stripeClient.checkout.sessions.create({
        // customer: user.stripeID,
        payment_method_types: ["card"],
        line_items: [
          {
            price: subscription.stripeId,
            quantity: 1
          }
        ],
        mode: "subscription",
        success_url: successUrl,
        cancel_url: cancelUrl
      });

      return session;
    } catch (error: any) {
      throw new Error(`Error in checkout creation: ${error.message}`);
    }
  }
}
