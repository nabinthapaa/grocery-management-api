import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.status(200).json({ message: "hello world" });
});

app.listen(8000, () => {
  console.log(`Listening on http://localhost:8000`);
});
