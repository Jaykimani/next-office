import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.officeaura.co.ke";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/restock-services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/employee-kits`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/event-packs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
    }
  ];
}