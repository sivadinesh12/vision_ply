/**
 * Seeds the database with Vision Ply's actual site content.
 * Run with: npm run seed
 */
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db");
const Product = require("../models/Product");
const CompanyInfo = require("../models/CompanyInfo");

const products = [
  { name: "Marine Plywood", slug: "marine-plywood", image: "/images/products/marine-plywood.jpg", order: 1, description: "All-weather, boil-water-resistant plywood built for high-moisture environments." },
  { name: "BWR Plywood", slug: "bwr-plywood", image: "/images/products/bwr-plywood.jpg", order: 2, description: "Boiling Water Resistant plywood for long-lasting interior and exterior use." },
  { name: "MR Plywood", slug: "mr-plywood", image: "/images/products/mr-plywood.jpg", order: 3, description: "Moisture Resistant plywood suited for general interior furniture and cabinetry." },
  { name: "MR Block Board", slug: "mr-block-board", image: "/images/products/mr-block-board.jpg", order: 4, description: "Lightweight, moisture-resistant block board for doors and furniture panels." },
  { name: "BWP Block Board", slug: "bwp-block-board", image: "/images/products/bwp-block-board.jpg", order: 5, description: "Boiling Water Proof block board engineered for maximum durability." },
  { name: "Fire Retardant Plywood", slug: "fire-retardant-plywood", image: "/images/products/fire-retardant-plywood.jpg", order: 6, description: "Chemically treated plywood offering enhanced fire resistance." },
  { name: "Shuttering Plywood", slug: "shuttering-plywood", image: "/images/products/shuttering-plywood.jpg", order: 7, description: "Heavy-duty plywood built for concrete shuttering and construction use." },
  { name: "Decorative Veneers", slug: "decorative-veneers", image: "/images/products/decorative-veneers.jpg", order: 8, description: "Premium veneers for elegant, natural-finish interiors." },
  { name: "Flush Door", slug: "flush-door", image: "/images/products/flush-door.jpg", order: 9, description: "Sturdy, warp-resistant flush doors for residential and commercial use." },
  { name: "Flexi Ply", slug: "flexi-ply", image: "/images/products/flexi-ply.jpg", order: 10, description: "Flexible plywood for curved surfaces and creative interior applications." },
];

const companyInfo = {
  name: "VISION PLY",
  tagline: "AN ISO 9001 & 14001, OHSAS 18001 COMPANY",
  aboutShort:
    "VISIONPLY is the sheer manifestation of how technology, quality and aesthetics could be blended in tandem to meet the variant customer needs.",
  aboutFull:
    "VISIONPLY is the sheer manifestation of how technology, quality and aesthetics could be blended in tandem to meet the variant customer needs. Obsession with quality, continuous technological innovation and years and years of understanding of customer needs have made VISIONPLY products the favourite of builders and architects. VISIONPLY has an array of applications in Household and Office interior works, Furniture manufacturing, Wall paneling and Partition works of all sorts.",
  phone: "+91 95005 75127",
  altPhone: "0422 2360327",
  email: "info@afyun.com",
  address: "Afyun Plywood Industries (South India)",
  social: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    youtube: "https://www.youtube.com/",
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
  heroSlides: ["/images/banners/banner1.jpg", "/images/banners/banner2.jpg", "/images/banners/banner3.jpg"],
};

async function seed() {
  await connectDB();

  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log(`[seed] inserted ${products.length} products`);

  await CompanyInfo.deleteMany({});
  await CompanyInfo.create(companyInfo);
  console.log("[seed] inserted company info");

  await mongoose.disconnect();
  console.log("[seed] done");
}

seed().catch((err) => {
  console.error("[seed] failed:", err);
  process.exit(1);
});
