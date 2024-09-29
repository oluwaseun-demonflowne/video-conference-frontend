"use server";
import { db } from "./db/drizzle";
import { cookies } from "next/headers";
import { EventSchema } from "./db/schema";
import { jwtVerify, SignJWT } from "jose";

const key = new TextEncoder().encode(process.env.EVENT_TOKEN);

export async function createEvent(eventName: string) {
  try {
    await db.insert(EventSchema).values({ admin: "admin", eventName });
    return { success: 200 };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    return { error: error.code };
  }
}

export type Event = {
  eventName: string;
  expires: string;
};

export async function signToken(event: Event) {
  return await new SignJWT(event)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 day from now")
    .sign(key);
}

export async function setEvent(eventName: string) {
  const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const event = {
    eventName,
    expires: expiresInOneDay.toISOString()
  };
  const encryptedEventName = await signToken(event);
  cookies().set("eventName", encryptedEventName, {
    expires: expiresInOneDay
    // httpOnly: true,
    // secure: true,
    // sameSite: "lax"
  });
}

export async function verifyToken(input: string) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"]
  });
  console.log(payload);
  return payload as Event;
}
