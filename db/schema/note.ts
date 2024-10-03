import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm"
import project from "./project"

const note = sqliteTable("notes", {
    id: integer('id').primaryKey(),
    title: text("title"),
    body: text("body"),
    tags: text("tags"),
    images: text("images"),
    project_id: integer('project_id').references(() => project.id).notNull(),
    // project_id: integer('project_id').notNull(),
    created_at: text("created_at").notNull().default(sql`(current_timestamp)`),
});

export const noteRelations = relations(note, ({ one }) => ({
    belongsToProject: one(project, {
        fields: [note.project_id],
        references: [project.id]
    })
}));


export default note;