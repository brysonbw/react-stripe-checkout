import { useState } from "react";
import { loadStripe, Stripe, StripeError} from "@stripe/stripe-js";
import {AiFillCreditCard} from 'react-icons/ai'
import ProductImage from "../images/product-img.png";
import toast from 'react-hot-toast'

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUB_KEY}`);
  }
  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState<StripeError | any >(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: `${process.env.REACT_APP_ITEM_PRICE}`,
    quantity: 1
  };


  // checkout options
  const checkoutOptions: any = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  // redirect to stripe checkout screen
  const redirectToCheckout = async () => {
    setLoading(true);
    const stripe = await getStripe();
 
    const { error } = await stripe!.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) toast.error(stripeError);

  return (
    <div className="checkout">
      <p className="checkout-title">React Stripe Checkout Example Source Code</p>
      <p className="checkout-description">
      Purchase to unlock GitHub Repo URL to source code of this react stripe checkout example demo/app
      </p>
      <h1 className="checkout-price">$1.99</h1>
      <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      />
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <div className="grey-circle">
          <AiFillCreditCard />
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Purchase"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;
