// import { NextAuthOptions } from "next-auth";
import { db } from "@/db/drizzle";
import { EventSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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
    jwt: ({ token, user }) => {
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
          eventName: ""
        }
      };
    }
  },
  secret: process.env.NEXTAUTH_SECRET
});
