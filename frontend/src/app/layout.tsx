import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import PrimaryDraw from "@/components/primary-draw";
import SecondaryDraw from "@/components/secondary-draw";
import { Separator } from "@/components/ui/separator";
import RootProvider from "@/components/providers/root-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("flex justify-center", inter.className)}>
            <RootProvider>

            <div className="mx-auto flex h-full w-full max-w-none flex-col sm:max-w-full lg:max-w-screen-2xl">
              <Navbar />
              <div className="flex h-full w-full overflow-auto">
                <PrimaryDraw />
                <Separator orientation="vertical" />
                <SecondaryDraw />
                <Separator orientation="vertical" />
                {children}
              </div>
            </div>
            </RootProvider>
      </body>
    </html>
  );
}
