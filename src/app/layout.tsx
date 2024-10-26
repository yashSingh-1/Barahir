import type { Metadata } from "next";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs"


export const metadata: Metadata = {
  title: "Barahir",
  description: "Communicate with your Users Directly!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
