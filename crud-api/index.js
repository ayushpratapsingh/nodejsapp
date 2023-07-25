const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.listen(process.env.PORT, async () => {
  console.log("server up on port",  process.env.PORT);
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
console.log(process.env.MONGODB_URL);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
