import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

export default app;
