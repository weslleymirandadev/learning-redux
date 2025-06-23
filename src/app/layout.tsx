import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/store/Provider";

export const metadata: Metadata = {
  title: "Redux Toolkit Query Example",
  description: "A simple example of using Redux Toolkit Query in a Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className="antialiased"
      >
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
