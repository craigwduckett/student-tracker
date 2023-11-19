import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";
 
export const users = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});