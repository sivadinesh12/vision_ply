export default function Products({ products }) {
  return (
    <section id="products" className="section" style={{ background: "var(--parchment-deep)" }}>
      <div className="container">
        <p className="eyebrow">Our Range</p>
        <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", maxWidth: 600 }}>
          Products engineered for every application
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: 24,
            marginTop: 44,
          }}
        >
          {products.map((p) => (
            <article
              key={p.slug}
              style={{
                background: "var(--cream)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                boxShadow: "var(--shadow-soft)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                style={{
                  aspectRatio: "4 / 3",
                  background: "var(--walnut-light)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: "18px 20px 22px" }}>
                <h3 style={{ fontSize: "1.05rem", marginBottom: 6 }}>{p.name}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--walnut)", margin: 0 }}>
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
