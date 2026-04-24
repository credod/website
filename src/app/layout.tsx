import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "../styles/globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
});

export const metadata: Metadata = {
  title: "Credo Duarte",
  description:
    "[•_•] Beep Boop. Credo Duarte: Software Engineer. Beep Boop [•_•]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${schibstedGrotesk.variable}`}>
      <body>
        <small
          data-beep-boop="[•_•]"
          dangerouslySetInnerHTML={{
            __html: "<!-- Website by Credo Duarte (credoduarte.com) -->",
          }}
        />
        {children}
      </body>
    </html>
  );
}
