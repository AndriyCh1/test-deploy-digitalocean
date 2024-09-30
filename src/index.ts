import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

export default app;
