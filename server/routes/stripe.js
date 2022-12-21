const express = require("express");
const Stripe = require("stripe");
const { Order } = require("../models/orderModel");

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: JSON.stringify(req.body.cartItems),
    },
  });

  const line_items = req.body.map((item) => {
    
    return {
      price_data: {
        currency: "ils",

        product_data: {
          name: item.name,
          // img: item.img,
          description: item.description,
          metadata: {
            id: req.body.userId,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: 1,
      adjustable_quantity:{
        enabled:true,
        maximum:10,
        minimum: 1
      }
    };

  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer: customer.id,
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  
  res.send({ url: session.url });


});








module.exports = router;
