import express from "express";
import cors from "cors";
import { db } from "./db/db";
import * as schema from "./db/schema/index";
import { eq } from "drizzle-orm"

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
  res.json({"message": "welcome to pkms"})
});


// Project CRUD

// Read (all)
app.get("/project", async (req, res) => {
  try{
    const data = await db.select().from(schema.project);
    res.json(data)
  } catch (error: any) {
    res.status(500).json({error: error.message})
  }
});

// Read (by id)
app.get("/project/:id", async (req, res) => {
  try {

    const id = parseInt(req.params.id);
    const data = await db.select().from(schema.project).where(eq(schema.project.id, id))
    res.json(data)

  } catch(error: any) {
    res.status(500).json({error: error.message});
  }
});

// Update
app.put("/project/:id", async (req, res) => {
  try{

    const id = parseInt(req.params.id);
    const title = req.body;
    // const data = await db.select().from(schema.project).where(eq(schema.project.id, id))
    const data = await db.update(schema.project).set({ title: title.title }).where(eq(schema.project.id, id)).returning()
    res.json(data)

  } catch(error: any) {
    res.status(500).json({error: error.message});
  }
})

// Create
app.post("/project", async (req, res) => {
  try{
    const title = req.body;
    const result = await db.insert(schema.project).values(title).returning({id: schema.project.id});
    const insertedData = await db.select().from(schema.project).where(eq(schema.project.id, result[0].id))
    res.json(insertedData);
  } catch(error: any) {
    res.status(500).json({error: error.message})
  }
});

// Delete
app.delete("/project/:id", async (req, res) => {
  try{
    
    const id = parseInt(req.params.id);
    const data = await db.delete(schema.project).where(eq(schema.project.id, id)).returning();
    res.json({"status": "deleted", data: data})

  } catch(error: any) {

    res.status(500).json({error: error.message})

  }
})


// Note CRUD

// read
app.get("/note", async (req, res) => {
  try{
    const data = await db.select().from(schema.note)
    res.json(data)
  } catch(error: any) {
    res.status(500).json({error: error.message});
  }
});

// read (by id)
app.get("/note/:id", async (req, res) => {
  try{
    const id = parseInt(req.params.id);
    const data = await db.select().from(schema.note).where(eq(schema.note.id, id));
    res.json(data)
  } catch(error: any) {
    res.status(500).json({error: error.message});
  }
});

// delete
app.delete("/note/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = await db.delete(schema.note).where(eq(schema.note.id, id)).returning();
    res.json({"status": "deleted", data: data})
  } catch(error: any) {
    res.status(500).json({error: error.message});
  }
})


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});