// import { NextAuthOptions } from "next-auth";
import { db } from "@/db/drizzle";
import { EventSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { jwtVerify, type JWTVerifyResult } from "jose";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

let eventName = "";

export const {
  auth,
  handlers: { GET, POST }
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          eventType: "admin"
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      try {
        const cookieStore = cookies();
        const token = cookieStore.get("eventName");
        if (token) {
          const { value } = token;
          // console.log(value);
          console.log(process.env.EVENT_TOKEN);
          const payload: JWTVerifyResult<Event> = await jwtVerify(
            value,
            new TextEncoder().encode(process.env.EVENT_TOKEN)
          );
          eventName = payload.payload.eventName as string;
        }
      } catch (error) {
        console.log(error);
      }
      if (user) {
        const u = user;
        return {
          ...token,
          id: u.id,
          // @ts-expect-error i do not know
          randomKey: u.randomKey
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (!session.user) {
        throw new Error("No session");
      }
      const profile = await db.query.EventSchema.findFirst({
        where: eq(EventSchema.admin, session.user.email!)
      });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          randomKey: token.randomKey,
          role: profile?.admin === session.user.email ? "admin" : "viewer",
          eventName: eventName
        }
      };
    }
  },
  secret: process.env.NEXTAUTH_SECRET
});
