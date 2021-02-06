import express from "express";
import dotenv from "dotenv";
import conncetDB from "./config/db.js";
import colors from "colors";

import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import urlHit from "./middleware/urlHit.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

conncetDB();

const app = express();

app.use(urlHit);

app.get("/", (req, res) => {
  res.send("API Homepage");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port ${PORT}!`.yellow.bold
  )
);
