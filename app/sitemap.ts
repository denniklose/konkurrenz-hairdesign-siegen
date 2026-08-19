import type { MetadataRoute } from "next";
import { salon } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(salon.seo).map((page) => ({
    url: new URL(page.path, salon.identity.websiteUrl).toString(),
    lastModified: new Date()
  }));
}
