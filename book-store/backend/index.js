import express from "express";
import { PORT, MongodbURL } from "./config.js";
import mongoose from "mongoose";
const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to Mern-stack");
});

mongoose
  .connect(MongodbURL)
  .then(() => {
    console.log("Database is Connected");
    app.listen(PORT, () => {
      console.log(`App is Running : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
