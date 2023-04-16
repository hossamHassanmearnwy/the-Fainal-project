const express = require("express");
const app = express();
const mongoose = require("mongoose");
var ProductsRoutes = require("./Routes/products");
var OffersRoutes = require("./Routes/offers");
var ReviewsRoutes = require("./Routes/reviews");
var CategoriesRoutes = require("./Routes/categories");
const ordersRoutes = require("./Routes/orders");
const userRouters = require("./Routes/user");
const cartRouts = require("./Routes/cart");
const copounsRoutes = require("./Routes/copouns");
const port = process.env.PORT || 3001;
require("dotenv").config();
console.log(`process.env`);
const dbConnection = require("./DB/connection");
dbConnection();

app.get("/", (req, res) => res.send("Hello team 5!"));
app.listen(port, () => console.log(`app listening on port ${port}!`));

app.use(express.json());
app.use("/Products", ProductsRoutes);
app.use("/Offers", OffersRoutes);
app.use("/Reviews", ReviewsRoutes);
app.use("/Categories", CategoriesRoutes);
app.use("/orders", ordersRoutes);
app.use("/users", userRouters);
app.use("/cart", cartRouts);
app.use("/copouns", copounsRoutes);
