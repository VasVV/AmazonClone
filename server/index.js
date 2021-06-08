const Stripe = require('stripe');
const stripe = Stripe('sk_test_51IRxezLeEfBz7v63tNaTPPWBdlMaVCVHxVDsqQ5Z4BzVxIf5fgxI4fTkznzt1S8ZRNnyc146VPqA29I4lmsNl1C600nnih2m6x');
const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors({origin: true}));
app.use(express.static("."));
app.use(express.json());



app.post("/create-payment-intent", async (req, res) => {
  const amount = req.body.amount;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "eur"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.listen(4242, () => console.log('Node server listening on port 4242!'));


