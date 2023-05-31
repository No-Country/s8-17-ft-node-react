import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import axios from "axios";

export default function Subscribe() {
  const stripe: any = useStripe();
  const elements: any = useElements();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createSubscription = async () => {
    // if (!stripe || !elements) {
    //   // Stripe.js has not yet loaded.
    //   // Make sure to disable form submission until Stripe.js has loaded.
    //   return;
    // }

    if (email.length < 7) return setError("Email field must have a minimum length of 7 characters.");

    try {
      const paymentMethod = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          email: email
        }
      });

      setLoading(true);

      if (paymentMethod.error) {
        console.log("Payment method cannot be created");
        setLoading(false);
        return setError(paymentMethod.error.message);
      } else {
        const response = await axios.post("http://localhost:3001/api/user/subscribe", {
          paymentMethod: paymentMethod.paymentMethod.id,
          email: email
        });

        const { clientSecret, status } = response.data;

        if (status === "requires_action" || status === "requires_payment_method") {
          const confirm = await stripe.confirmCardPayment(clientSecret);

          if (confirm.error) {
            console.log("There was an issue!");
            setLoading(false);
            // Display error message in your UI.
            // The card was declined (i.e. insufficient funds, card has expired, etc)
            return setError(confirm.error.message);
          } else {
            console.log("You got the money 1!");
            setLoading(false);
            setError("");
            setEmail("");
            elements.getElement(CardElement).clear();
            // Show a success message to your customer
            return alert("Payment successful! Subscription active.");
          }
        } else {
          console.log("You got the money 2!");
          setLoading(false);
          setError("");
          setEmail("");
          elements.getElement(CardElement).clear();
          // No additional information was needed
          // Show a success message to your customer
          return alert("Payment successful! Subscription active.");
        }
      }
    } catch (error: any) {
      console.log("Payment failed!");
      setLoading(false);
      return setError(error.response.data.errorMessage);
    }
  };

  return (
    <div style={{ width: "40%" }}>
      Email:
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <CardElement />
      <br />
      <button onClick={createSubscription} disabled={!stripe || !elements}>
        {loading ? <div className="spinner-border text-light" role="status"></div> : "Subscribe"}
      </button>
      <br />
      <br />
      {error ? (
        <div className="alert alert-warning" role="alert">
          {error}
        </div>
      ) : null}
    </div>
  );
}
