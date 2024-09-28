"use server"
import { db } from "./db/drizzle";
import { EventSchema } from "./db/schema";

export async function createEvent(eventName: string) {
  try {
     await db
      .insert(EventSchema)
      .values({ admin: "admin", eventName });
      return {success:200}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    console.log(error);
    return {error: error.code}
  }
}
