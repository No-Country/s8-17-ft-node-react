import { Router } from "express";
import { checkJWT } from "../middleware/jwt";
import { SubscriptionController } from "../controllers/subscription.controller";
import { UserService } from "../services/user.service";
import { SubscriptionService } from "../services/subscription.service";
import { PaymentService } from "../services/payment.service";

const subscriptionRoutes = Router();
const subscriptionController = new SubscriptionController(
  new UserService(),
  new SubscriptionService(),
  new PaymentService()
);

subscriptionRoutes.get("/", checkJWT, subscriptionController.getAll.bind(subscriptionController));
subscriptionRoutes.get(
  "/checkout/:subscriptionId",
  checkJWT,
  subscriptionController.subscribe.bind(subscriptionController)
);
subscriptionRoutes.get(
  "/success/:paymentId",
  subscriptionController.success.bind(subscriptionController)
);
subscriptionRoutes.get(
  "/canceled/:paymentId",
  subscriptionController.canceled.bind(subscriptionController)
);

export default subscriptionRoutes;
