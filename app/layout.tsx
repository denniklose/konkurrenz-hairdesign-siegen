import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import { salon } from "./site-data";

export const metadata: Metadata = {
  metadataBase: new URL(salon.identity.websiteUrl),
  applicationName: salon.identity.name,
  category: "Friseursalon",
  robots: {
    index: !salon.template.isStarter,
    follow: !salon.template.isStarter
  },
  icons: {
    icon: salon.design.favicon,
    shortcut: salon.design.favicon
  }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050606"
};

const themeStyle = {
  "--blue": salon.design.accent,
  "--blue-bright": salon.design.accentBright,
  "--blue-deep": salon.design.accentDeep
} as CSSProperties;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <body style={themeStyle}>{children}</body>
    </html>
  );
}
