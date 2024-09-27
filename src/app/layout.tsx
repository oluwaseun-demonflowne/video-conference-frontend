import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";

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
          <Toaster visibleToasts={1} />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
