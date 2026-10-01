import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  const routes = [
    "",
    "/about",
    "/products",
    "/kitchen-design",
    "/industries",
    "/services",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/products" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/products" || route === "/kitchen-design" ? 0.9 : 0.8,
  }));
}
