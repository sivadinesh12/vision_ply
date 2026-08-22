import { Link } from "react-router-dom";
import ImageSlot from "./ImageSlot";

export default function CatalogueCard({ catalogue }) {
  return (
    <article
      style={{
        background: "var(--cream)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        boxShadow: "var(--shadow-soft)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div style={{ aspectRatio: "4 / 3" }}>
        <ImageSlot src={catalogue.cover} alt={catalogue.name} />
      </div>
      <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: 8 }}>{catalogue.name}</h3>
        <p style={{ fontSize: "0.92rem", color: "var(--walnut)", flex: 1 }}>
          {catalogue.shortDescription}
        </p>
        <Link
          to={`/products/${catalogue.slug}`}
          className="btn btn--primary"
          style={{ marginTop: 12, alignSelf: "flex-start" }}
        >
          View More
        </Link>
      </div>
    </article>
  );
}
