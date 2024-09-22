import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const project = sqliteTable("project", {
    id: integer("id").primaryKey(),
    title: text("name"),
    created_at: integer('created_at', { mode: 'timestamp'}),
});