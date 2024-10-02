import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm"
import { timestamp } from "drizzle-orm/mysql-core";

const project = sqliteTable("projects", {
    id: integer("id").primaryKey(),
    title: text("title"),
    created_at: text("created_at").notNull().default(sql`(current_timestamp)`),
});

export default project;