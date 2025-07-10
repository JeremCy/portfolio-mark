import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/fr/", "/en/"],
      disallow: ["/api/", "/fr/admin/", "/en/admin/", "/admin/"],
    },
    sitemap: "https://studio-cauris.com/sitemap.xml",
  };
}
