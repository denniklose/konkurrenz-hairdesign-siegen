import type { Metadata } from "next";
import { salon } from "./site-data";

export type SeoKey = keyof typeof salon.seo;

export function pageMetadata(key: SeoKey): Metadata {
  const page = salon.seo[key];

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: salon.identity.name,
      locale: salon.identity.locale,
      type: "website",
    },
  };
}
