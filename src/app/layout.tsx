import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { SocketProvider } from "@/providers/Socket";

const inter = Oxanium({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Confrence Application",
  description: "Meetinsg Events Teachings , all in one place  "
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <SocketProvider>
            <Toaster visibleToasts={1} />
            {children}
          </SocketProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
