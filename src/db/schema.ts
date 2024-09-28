import { integer, text, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const EventSchema = pgTable("event", {
  id: serial("id").primaryKey().notNull().unique(),
  admin: text("email").notNull(),
  eventName: varchar("eventName").notNull().unique(),
  noOfUsers: integer("noOfUsers").notNull().default(0)
});

export type SelectEventSchema = typeof EventSchema.$inferSelect;
export type InsertEventSchema = typeof EventSchema.$inferInsert;
