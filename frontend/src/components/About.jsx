export default function About({ company }) {
  return (
    <section id="about" className="section">
      <div className="container two-col">
        <div
          style={{
            aspectRatio: "4 / 5",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            background: `linear-gradient(160deg, var(--walnut), var(--espresso))`,
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <img
            src="/images/about/plywood.jpg"
            alt="Cross-section of engineered plywood layers"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              mixBlendMode: "luminosity",
              opacity: 0.85,
            }}
          />
        </div>

        <div>
          <p className="eyebrow">About Us</p>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)" }}>
            Built on quality, technology and trust
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--walnut)" }}>
            {company?.aboutFull ||
              "OLYMPIC TRADERS blends technology, quality and aesthetics to meet the varied needs of builders, architects and homeowners."}
          </p>

          {company?.certifications?.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 24,
              }}
            >
              {company.certifications.map((c) => (
                <span
                  key={c}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    padding: "8px 14px",
                    borderRadius: 999,
                    border: "1px solid var(--moss)",
                    color: "var(--moss)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
