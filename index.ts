import express from "express";
import cors from "cors";
import { db } from "./db/db";
import * as schema from "./db/schema/index";

const result = await db.select().from(schema.projects);
const notes = await db.select().from(schema.notes);
console.log(notes);

const app = express();
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.json(notes);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});