const express = require("express");
const app = express();

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Q7HaaHJe8uQrcicppvzG39N3EupZACIbJWhpKdcBuvutsLy5mi0dGyKjMvioFBZ3RQHKy7cojBQEZfUFHUmJmAj00AcsLri48"
);

const port = 7000;
// const port = process.env.PORT || 7000
app.use(express.json());
app.use(cors());

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
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });
  res.json({ id: session.id });
});

app.listen(port, () => {
  console.log("its listing");
});
