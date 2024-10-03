import { db } from "./db";
import * as schema from "./schema";


//project
await db.delete(schema.project);

await db.insert(schema.project).values([
    {
        title: "A Journal",
    },
    {
        title: "A Bookeeper",
    },
]);

// note
await db.delete(schema.note);

await db.insert(schema.note).values([
    {
        title: "a simple note",
        body: "hi i'm the body of the note",
        project_id: 1
    }
])

console.log("seeding completed")