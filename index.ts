import express from "express";
import cors from "cors";
import { db } from "./db";
import * as schema from "./schema";

const result = await db.select().from(schema.project);
console.log(result);

const app = express();
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.json(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});