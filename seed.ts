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

console.log("seeding complete")