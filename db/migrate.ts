import { migrate } from "drizzle-orm/bun-sqlite/migrator";
import { db } from "./db"
import config from '../drizzle.config'


await migrate(db, { migrationsFolder: config.out!});

console.log("migration completed")