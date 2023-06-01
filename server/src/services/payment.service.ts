import Repository from "../utils/repository";
import SubscriptionModel, { Subscription } from "../models/subscription.model";
import UserModel, { User } from "../models/user.model";
import PaymentModel, { Payment } from "../models/payment.model";
import { PaymentStatus } from "../utils/types";

export class PaymentService {
  private subscriptionRepository: Repository<Subscription> = new Repository(SubscriptionModel);
  private userRepository: Repository<User> = new Repository(UserModel);
  private paymentRepository: Repository<Payment> = new Repository(PaymentModel);
  constructor() {}

  public async updateStatusPayment(payment: Payment, status: PaymentStatus): Promise<void> {
    await this.paymentRepository.update(
      {
        id: payment.id
      },
      {
        status
      }
    );
  }

  public async getById(id: string): Promise<Payment> {
    return this.paymentRepository.findById(id, [
      {
        path: "userDb",
        select: "id"
      }
    ]);
  }
}
