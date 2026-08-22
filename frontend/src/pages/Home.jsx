import { Link } from "react-router-dom";
import { companyInfo, catalogues } from "../data/siteContent";
import Hero from "../components/Hero";
import VeneerDivider from "../components/VeneerDivider";
import CatalogueCard from "../components/CatalogueCard";
import Specs from "../components/Specs";
import Brands from "../components/Brands";

export default function Home() {
  return (
    <>
      <Hero company={companyInfo} />

      <VeneerDivider />

      {/* About teaser */}
      <section className="section">
        <div className="container two-col">
          <div style={{ aspectRatio: "4 / 5", borderRadius: "var(--radius)", overflow: "hidden", background: "linear-gradient(160deg, var(--walnut), var(--espresso))", boxShadow: "var(--shadow-soft)" }}>
            <img
              src="/images/about/plywood.jpg"
              alt="Cross-section of engineered plywood layers"
              style={{ width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "luminosity", opacity: 0.85 }}
            />
          </div>
          <div>
            <p className="eyebrow">About Us</p>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)" }}>
              Built on quality, technology and trust
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--walnut)" }}>{companyInfo.aboutShort}</p>
            <Link to="/about" className="btn btn--primary" style={{ marginTop: 8 }}>
              More About Us
            </Link>
          </div>
        </div>
      </section>

      <VeneerDivider />

      {/* Product catalogue teaser */}
      <section id="products" className="section" style={{ background: "var(--parchment-deep)" }}>
        <div className="container">
          <p className="eyebrow">Our Range</p>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", maxWidth: 600 }}>
            Products engineered for every application
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
              marginTop: 44,
            }}
          >
            {catalogues.map((c) => (
              <CatalogueCard key={c.slug} catalogue={c} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/products" className="btn btn--outline" style={{ color: "var(--espresso)", borderColor: "var(--walnut-light)" }}>
              See All Products
            </Link>
          </div>
        </div>
      </section>

      <Specs company={companyInfo} />
      <Brands company={companyInfo} />
      <VeneerDivider tone="dark" />

      {/* Contact CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <p className="eyebrow">Get In Touch</p>
          <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)" }}>
            Ready to talk about your project?
          </h2>
          <p style={{ color: "var(--walnut)", maxWidth: 480, margin: "0 auto 20px" }}>
            Reach out for pricing, sizes, or bulk orders — we usually reply within a day.
          </p>
          <Link to="/contact" className="btn btn--primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
