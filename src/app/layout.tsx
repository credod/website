import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import GridOverlay from "@/components/GridOverlay";
import "../styles/globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
});

export const metadata: Metadata = {
  title: "Credo Duarte",
  description:
    "Credo Duarte is a Software Engineer with a passion for creative expression through technology",
  authors: [{ name: "Credo Duarte" }],
  creator: "Credo Duarte",
  publisher: "Credo Duarte",
  other: {
    designer: "Credo Duarte",
  },
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
            __html:
              "<!-- Welcome to my personal website! If you'd like to collaborate, feel free to reach out: studio@credoduarte.com -->",
          }}
        />
        <GridOverlay />
        {children}
      </body>
    </html>
  );
}
