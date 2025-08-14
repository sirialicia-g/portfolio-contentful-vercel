import type { Metadata } from "next";
import Nav from "./components/Nav";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Alicia's portfolio, powered by Next, Contentful, and Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="parent-container">{children}</main>
      </body>
    </html>
  );
}
