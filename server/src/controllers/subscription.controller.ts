import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { SubscriptionService } from "../services/subscription.service";
import { User } from "../models/user.model";
import { Subscription } from "../models/subscription.model";
import { PaymentStatus, UserRoles } from "../utils/types";
import { PaymentService } from "../services/payment.service";

export class SubscriptionController {
  constructor(
    private userService: UserService,
    private subscriptionService: SubscriptionService,
    private paymentService: PaymentService
  ) {}

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const subscriptions = await this.subscriptionService.getAll();
      return res.status(200).json(subscriptions);
    } catch (error: any) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }

  async subscribe(req: Request, res: Response): Promise<Response> {
    const { subscriptionId } = req.params;

    try {
      const partialUser: Partial<User> = { id: res.locals.jwtPayload.id };
      const user: User = await this.userService.findOne(partialUser);
      if (!user) return res.status(404).json({ errorMessage: "User not found" });

      const subscription: Subscription = await this.subscriptionService.getById(subscriptionId);
      if (!subscription) return res.status(404).json({ errorMessage: "Subscription not found" });

      if (user.role !== UserRoles.FREE) {
        return res.status(400).json({ errorMessage: "User already subscribed" });
      }

      const session = await this.subscriptionService.subscribe(user, subscription);

      return res.status(200).json(session);
    } catch (error: any) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }

  async success(req: Request, res: Response): Promise<Response | void> {
    const { paymentId } = req.params;

    try {
      const payment = await this.paymentService.getById(paymentId);
      if (!payment) return res.status(404).json({ errorMessage: "Payment not found" });
      if (payment.status !== PaymentStatus.PENDING)
        return res.status(404).json({
          errorMessage: "Payment not valid"
        });

      const currentDate = new Date();
      await this.userService.updateSubscriptionStatus(payment.userDb.id, {
        active: true,
        dateOfCreation: currentDate,
        dateOfUpdate: currentDate,
        dateOfExpiration: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          currentDate.getDate()
        )
      });
      console.log("role: ", payment);

      await this.userService.updateRole(payment.userDb.id, payment.role);
      await this.paymentService.updateStatusPayment(payment, PaymentStatus.SUCCEEDED);
      return res.redirect(process.env.CLIENT_URL);
    } catch (error: any) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }

  async canceled(req: Request, res: Response): Promise<Response | void> {
    const { paymentId } = req.params;

    try {
      const payment = await this.paymentService.getById(paymentId);
      if (!payment) return res.status(404).json({ errorMessage: "Payment not found" });

      await this.paymentService.updateStatusPayment(payment, PaymentStatus.CANCELED);
      return res.redirect(process.env.CLIENT_URL);
    } catch (error: any) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }
}
