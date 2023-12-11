require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const productsRouter = require("./routers/products");

app.use(cors());
app.use(express.json());
console.log("App is running");
app.use("/products", productsRouter);

module.exports = app;