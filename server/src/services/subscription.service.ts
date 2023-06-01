import Stripe from "stripe";
import Repository from "../utils/repository";
import SubscriptionModel, { Subscription } from "../models/subscription.model";
import UserModel, { User } from "../models/user.model";
import StripeService from "./stripe.service";
import PaymentModel, { Payment } from "../models/payment.model";
import { PaymentStatus } from "../utils/types";

export class SubscriptionService {
  private subscriptionRepository: Repository<Subscription> = new Repository(SubscriptionModel);
  private userRepository: Repository<User> = new Repository(UserModel);
  private paymentRepository: Repository<Payment> = new Repository(PaymentModel);
  private stripeService: StripeService;
  constructor() {
    this.stripeService = new StripeService();
  }

  public async subscribe(
    user: User,
    subscription: Subscription
  ): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    let payment: Payment;
    let stripeCustomer: any;
    try {
      if (!user.stripeId) {
        stripeCustomer = await this.stripeService.createCustomer(user);
        await this.userRepository.update({ id: user.id }, { stripeId: stripeCustomer.id });
      }

      // console.log(user);
      // console.log(subscription.stripeId);

      payment = await this.paymentRepository.create({
        userDb: user,
        stripeId: subscription.stripeId,
        amount: subscription.price,
        status: PaymentStatus.CREATED,
        creationDate: new Date()
      });

      const URL_SUCCESS = `${process.env.SERVER_URL}/api/subscription/success/${payment.id}`;
      const URL_CANCELED = `${process.env.SERVER_URL}/api/subscription/canceled/${payment.id}`;
      const session = await this.stripeService.createCheckout(
        stripeCustomer,
        subscription,
        URL_SUCCESS,
        URL_CANCELED
      );

      await this.paymentRepository.update({ id: payment.id }, { status: PaymentStatus.PENDING });
      return session;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getAll(): Promise<Subscription[]> {
    return this.subscriptionRepository.findAll();
  }
  public async getById(id: string): Promise<Subscription> {
    return this.subscriptionRepository.findById(id);
  }
}
