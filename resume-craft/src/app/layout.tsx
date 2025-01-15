import { ThemeProvider } from "@/components/shared/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "../styles/globals.css";

const fontTitle = Nunito({ subsets: ["latin"], variable: "--font-title" });
const fontSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ResumeCraft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={cn(
          "min-h-screen  bg-background font-sans antialiased",
          fontTitle.variable,
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
