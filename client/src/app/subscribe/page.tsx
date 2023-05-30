"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Subscribe from "@/components/Subscribe";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

export default function PageSubscribe() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <Subscribe />
      </Elements>
    </>
  );
}
