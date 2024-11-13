const express = require("express");
const app = express();
require('dotenv').config
const cors = require("cors");

const corsOptions = { 
  origin: "https://wondrous-halva-25e4ba.netlify.app", 
  optionsSuccessStatus: 200 
}; 
app.use(express.json()); 
app.use(cors(corsOptions));





// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


const port = process.env.PORT

const stripe = require("stripe")(
  "sk_test_51Q7HaaHJe8uQrcicppvzG39N3EupZACIbJWhpKdcBuvutsLy5mi0dGyKjMvioFBZ3RQHKy7cojBQEZfUFHUmJmAj00AcsLri48"
);
// const port="https://kabhi.onrender.com";
// const port = 7000;
// const port = process.env.PORT || 7000

// app.use(express.json());
// app.use(cors());

//checkout api

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  console.log(products);

  const lineItems = products.map((data) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: data.name,
      },
      unit_amount: data.price * 100,
    },
    quantity: data.qty,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://kabhi.onrender.com/success",
    cancel_url: "https://kabhi.onrender.com/cancel",
  });
  res.json({ id: session.id });
});

app.listen(port, () => {
  console.log("its listing");
});
