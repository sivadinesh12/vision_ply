import { Link, useParams, Navigate } from "react-router-dom";
import { catalogues } from "../data/siteContent";
import PageHeader from "../components/PageHeader";
import ImageSlot from "../components/ImageSlot";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const catalogue = catalogues.find((c) => c.slug === slug);

  if (!catalogue) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <PageHeader
        eyebrow="Product Catalogue"
        title={catalogue.name}
        crumbs={[{ label: "Products", to: "/products" }, { label: catalogue.name }]}
      />

      <section className="section">
        <div className="container two-col">
          <div style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "var(--shadow-soft)" }}>
            <ImageSlot src={catalogue.cover} alt={catalogue.name} />
          </div>

          <div>
            <p className="eyebrow">{catalogue.name}</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)" }}>{catalogue.shortDescription}</h2>
            <p style={{ color: "var(--walnut)", fontSize: "1.02rem" }}>{catalogue.description}</p>
            <Link to="/contact" className="btn btn--primary" style={{ marginTop: 8 }}>
              Enquire About This Product
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--parchment-deep)", paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h3 style={{ fontSize: "1.4rem", marginBottom: 24 }}>Photos</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
            }}
          >
            {catalogue.photos.map((src, i) => (
              <div
                key={src}
                style={{
                  aspectRatio: "4 / 3",
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <ImageSlot src={src} alt={`${catalogue.name} photo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Link to="/products" className="btn btn--outline" style={{ color: "var(--espresso)", borderColor: "var(--walnut-light)" }}>
            ← Back to all products
          </Link>
        </div>
      </section>
    </>
  );
}
