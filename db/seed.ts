import { db } from "./db";
import * as schema from "./schema";

const timestamp = Date.now()

await db.insert(schema.project).values([
    {
        title: "A Journal",
    },
    {
        title: "A Bookeeper",
    },
]);

await db.insert(schema.note).values([
    {
        title: "a simple note",
        project_id: 1
    }
])

console.log("seeding complete")