
const stripe = require('stripe')('sk_test_51NnMT2SB7FyHWx0v5FzjN75Pau8ICqy709msaKDXNS3cfNSFbgJDJZsFf5cTASIjPQ2M5c0yAgBqjZrTbG2v5dBT00KNo0Hyxu')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(bodyParser.json())

app.get('/',(req,res)=> {
    res.send("Hello Dosht!!")
})

app.post('/payment-sheet', async (req, res) => {
    // Use an existing Customer ID if this is a returning customer.
    // const {amount, currency} = req.body
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2023-08-16'}
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 600,
      currency: 'inr',
      customer: customer.id,
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
    });
  });

app.listen(4002, () => console.log("running on local host http://10.0.2.2:4002"))