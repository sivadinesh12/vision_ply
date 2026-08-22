import { catalogues } from "../data/siteContent";
import PageHeader from "../components/PageHeader";
import CatalogueCard from "../components/CatalogueCard";

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Our Range" title="Products" crumbs={[{ label: "Products" }]} />

      <section className="section">
        <div className="container">
          <p style={{ color: "var(--walnut)", maxWidth: 640, fontSize: "1.05rem" }}>
            Our products are organized into three catalogues. Open any one
            for a closer look — photos, description and details for that
            product line.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
              marginTop: 40,
            }}
          >
            {catalogues.map((c) => (
              <CatalogueCard key={c.slug} catalogue={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
