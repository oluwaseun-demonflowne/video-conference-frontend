import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const inter = Oxanium({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children,
  session
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Toaster visibleToasts={1} />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
