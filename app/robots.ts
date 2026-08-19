import type { MetadataRoute } from "next";
import { salon } from "./site-data";

export default function robots(): MetadataRoute.Robots {
  const isPublic = !salon.template.isStarter && salon.template.handoverStatus === "ready";

  return {
    rules: {
      userAgent: "*",
      allow: isPublic ? "/" : undefined,
      disallow: isPublic ? undefined : "/"
    },
    sitemap: new URL("/sitemap.xml", salon.identity.websiteUrl).toString()
  };
}
