import type { Metadata } from "next";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs"
import { Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme";

const manrope = Manrope({
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Barahir",
  description: "Share AI powered videos with Users Directly!",
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
        className={`${manrope.className} bg-[#171717] flex justify-center items-center h-screen`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
