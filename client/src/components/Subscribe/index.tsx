import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const stripe: any = useStripe();
  const elements: any = useElements();

  const createSubscription = async () => {
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
      });

      const response = await fetch("http://localhost:3001/user/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          paymentMethod: paymentMethod.paymentMethod.id
        })
      });

      if (!response.ok) return alert("Payment unsuccessful!");

      const data = await response.json();
      console.log(data);
      // const confirm = await stripe.confirmPayment({
      //   clientSecret: data.clientSecret,
      //   confirmParams: {
      //     return_url: "https://cookmealpreview.vercel.app/success"
      //   }
      // });
      // console.log(confirm);
      // if (confirm.error) return alert("Payment unsuccessful!");
      alert("Payment successful! Subscription active.");
    } catch (error: any) {
      console.error(error);
      alert("Payment failed, " + error.message);
    }
  };

  return (
    <div style={{ width: "40%" }}>
      Name:
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      Email:
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <CardElement />
      <br />
      <button onClick={createSubscription}>Subscribe</button>
    </div>
  );
}
