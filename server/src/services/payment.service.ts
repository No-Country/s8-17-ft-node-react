import Repository from "../utils/repository";
import PaymentModel, { Payment } from "../models/payment.model";
import { PaymentStatus } from "../utils/types";

export class PaymentService {
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
    return this.paymentRepository.findById(id, {
      populate: [
        {
          path: "userDb",
          select: "id"
        }
      ]
    });
  }
}
