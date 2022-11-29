import React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"
const dotenv = require('dotenv');

const PUBLIC_KEY = "pk_test_51M4cQtF8BTMOqBJGnKcLEzIKc7e2DfFvGSf4ZKXxR5pqaRwe47eBK4oQMFnuXgjJq1HVNWTpOQG7mtaIR8lGCFxH00egt6j9VQ";

const stripeTestPromise = loadStripe(PUBLIC_KEY);
console.log(dotenv.STRIPE_PUBLIC_KEY);

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
