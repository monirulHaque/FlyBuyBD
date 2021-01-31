import express from "express";
import dotenv from "dotenv";
import conncetDB from "./config/db.js";
import colors from "colors";
import products from "./data/products.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

conncetDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API Homepage");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port ${PORT}!`.yellow.bold
  )
);
