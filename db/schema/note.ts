import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm"
import projects from "./project"

const note = sqliteTable("notes", {
    id: integer('id').primaryKey(),
    title: text("title"),
    project_id: integer('project_id').references(() => projects.id),
    created_at: text("created_at").notNull().default(sql`(current_timestamp)`),
});

export default note;