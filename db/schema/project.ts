import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { relations } from "drizzle-orm";
import note from "./note"


const project = sqliteTable("projects", {
    id: integer("id").primaryKey(),
    title: text("title"),
    created_at: text("created_at").notNull().default(sql`(current_timestamp)`),
});

export const projectRelations = relations(project, ({ many }) => ({
    note: many(note),
}));

export default project;