import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bhshealthcares.com/"

  const routes = [
    "",
    "/services",
    "/services/medical-billing",
    "/services/revenue-cycle-management",
    "/services/provider-credentialing",
    "/services/financial-assistance",
    "/specialties",
    "/specialties/internal-medicine",
    "/specialties/obgyn",
    "/specialties/pediatrics",
    "/greenpay",
    "/pricing",
    "/blog",
    "/success-stories",
    "/about",
    "/get-started",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}
