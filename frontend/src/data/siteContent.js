// All site content lives here — no backend/database needed.
// Edit this file directly to change catalogues, about text, contact
// details, sizes, social links, etc. Save the file and rebuild/redeploy.

// The three product catalogues. Each `photos` entry is a path under
// /public — drop a matching image file in and it appears automatically;
// until then, that slot shows a placeholder. See
// public/images/catalogues/README.txt for exact folder/filenames.
export const catalogues = [
  {
    slug: "core-veneer",
    name: "Core Veneer",
    shortDescription:
      "Plantation-based core veneer with uniform thickness, high strength and long-lasting performance.",
    description:
      "Our Core Veneer is manufactured from selected plantation hardwoods using state-of-the-art machinery and an experienced workforce, ensuring uniform thickness and consistent strength in every sheet. It forms the structural heart of plywood, block boards and flush doors, and is produced to meet both domestic and international standards.",
    cover: "/images/catalogues/core-veneer/cover.jpg",
    photos: [
      "/images/catalogues/core-veneer/1.jpg",
      "/images/catalogues/core-veneer/2.jpg",
      "/images/catalogues/core-veneer/3.jpg",
      "/images/catalogues/core-veneer/4.jpg",
      "/images/catalogues/core-veneer/5.jpg",
      "/images/catalogues/core-veneer/6.jpg",
      "/images/catalogues/core-veneer/7.jpg",
      "/images/catalogues/core-veneer/8.jpg",
      "/images/catalogues/core-veneer/9.jpg",
      "/images/catalogues/core-veneer/10.jpg",
      "/images/catalogues/core-veneer/11.jpg",
    ],
  },
  {
    slug: "short-core-veneer",
    name: "Short Core Veneer",
    shortDescription:
      "Precision-cut short-length core veneer sheets for compact panel and block board production.",
    description:
      "Short Core Veneer is cut to precise shorter lengths for manufacturers who need efficient, low-wastage input for smaller panels and block boards. Each batch goes through the same rigorous quality checks as our full-length veneer, so strength and consistency are never compromised.",
    cover: "/images/catalogues/short-core-veneer/cover.jpg",
    photos: [
      "/images/catalogues/short-core-veneer/1.jpg",
      "/images/catalogues/short-core-veneer/2.jpg",
      "/images/catalogues/short-core-veneer/3.jpg",
      "/images/catalogues/short-core-veneer/4.jpg",
      "/images/catalogues/short-core-veneer/5.jpg",
    ],
  },
  {
    slug: "core-veneer-scrap",
    name: "Core Veneer Scrap",
    shortDescription:
      "Sorted core veneer scrap and offcuts, ideal for cost-effective, sustainable panel filling.",
    description:
      "Core Veneer Scrap consists of sorted offcuts and trims from our core veneer production, offering plywood and block board manufacturers a cost-effective, sustainable input without compromising on the plantation-hardwood quality behind every Bhalothia-style batch.",
    cover: "/images/catalogues/core-veneer-scrap/cover.jpg",
    photos: [
      "/images/catalogues/core-veneer-scrap/1.jpg",
      "/images/catalogues/core-veneer-scrap/2.jpg",
      "/images/catalogues/core-veneer-scrap/3.jpg",
      "/images/catalogues/core-veneer-scrap/4.jpg",
    ],
  },
];

export const companyInfo = {
  name: "OLYMPIC TRADERS",
  tagline: "AN ISO 9001 & 14001, OHSAS 18001 COMPANY",
  aboutShort:
    "VISIONPLY is the sheer manifestation of how technology, quality and aesthetics could be blended in tandem to meet the variant customer needs.",
  aboutFull:
    "VISIONPLY is the sheer manifestation of how technology, quality and aesthetics could be blended in tandem to meet the variant customer needs. Obsession with quality, continuous technological innovation and years and years of understanding of customer needs have made VISIONPLY products the favourite of builders and architects. VISIONPLY has an array of applications in Household and Office interior works, Furniture manufacturing, Wall paneling and Partition works of all sorts.",
  whatWeOffer: [
    "Direct sourcing from farmers, promoting sustainability and rural livelihoods",
    "Use of plantation hardwoods, ensuring eco-conscious production",
    "A team of skilled professionals with deep industry insight",
    "Strong focus on innovation, consistency, and timely delivery",
  ],
  phone: "+91 95005 75127",
  altPhone: "0422 2360327",
  whatsappNumber: "917868041691",
  email: "info@afyun.com",
  address: "Afyun Plywood Industries (South India)",
  // Same platforms as the reference site (bhalothiaudyog.com):
  // WhatsApp, Instagram, X (Twitter), YouTube, LinkedIn.
  social: {
    whatsapp: "https://wa.me/917868041691",
    instagram: "https://www.instagram.com/",
    x: "https://x.com/",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/",
  },
  certifications: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
  features: [
    { text: "Absolutely No Borer" },
    { text: "100% Quality Assured" },
    { text: "Vacuum Pressure Treated" },
    { text: "Selected Plantation Timber" },
    { text: "All Weather Proof" },
    { text: "Structurally Balanced" },
    { text: "Specified GLP Treated" },
    { text: "Chemically Treated" },
  ],
  brands: [
    { name: "Brand One", image: "/images/brands/logo1.png", tagline: "5 Times Money Back Guarantee" },
    { name: "Brand Two", image: "/images/brands/logo2.png", tagline: "3 Times Money Back Guarantee" },
    { name: "Brand Three", image: "/images/brands/logo3.png", tagline: "Life Time Guarantee" },
  ],
  standardSizes: ["8’ x 4’", "8’ x 3’", "7’ x 4’", "7’ x 3’", "6’ x 4’", "6’ x 3’"],
  standardThickness: ["4 mm", "6 mm", "9 mm", "12 mm", "15 mm", "16 mm", "18 mm", "19 mm", "25 mm"],
  heroSlides: [
    "/images/banners/banner1.jpg",
    "/images/banners/banner2.jpg",
    "/images/banners/banner3.jpg",
  ],
};
