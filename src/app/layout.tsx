import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog",
  description: "Blog criado com next para aprendizado e treinamento!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="">
      <body>{children}</body>
    </html>
  );
}
