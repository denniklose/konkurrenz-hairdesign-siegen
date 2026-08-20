import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import { salon } from "./site-data";

const isPublic = !salon.template.isStarter && salon.template.handoverStatus === "ready";

export const metadata: Metadata = {
  metadataBase: new URL(salon.identity.websiteUrl),
  applicationName: salon.identity.name,
  category: "Friseursalon",
  robots: {
    index: isPublic,
    follow: isPublic
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
  "--accent": salon.design.accent,
  "--accent-bright": salon.design.accentBright,
  "--accent-deep": salon.design.accentDeep
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
