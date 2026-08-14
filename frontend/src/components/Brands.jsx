export default function Brands({ company }) {
  if (!company?.brands?.length) return null;
  return (
    <section className="section--tight">
      <div className="container">
        <p className="eyebrow">Our Brands</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            marginTop: 24,
          }}
        >
          {company.brands.map((b) => (
            <div
              key={b.name}
              style={{
                background: "var(--cream)",
                borderRadius: "var(--radius)",
                padding: "28px 24px",
                textAlign: "center",
                border: "1px solid var(--line)",
              }}
            >
              <img
                src={b.image}
                alt={b.name}
                style={{ height: 48, margin: "0 auto 14px", objectFit: "contain" }}
              />
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--moss)", margin: 0 }}>
                {b.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
