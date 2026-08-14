export default function Specs({ company }) {
  return (
    <section className="section" style={{ background: "var(--espresso)", color: "var(--parchment)" }}>
      <div className="container two-col-equal">
        <div>
          <p className="eyebrow">Top Features</p>
          <h2 style={{ color: "var(--cream)", fontSize: "1.8rem" }}>Why builders choose us</h2>
          <ul style={{ listStyle: "none", padding: 0, marginTop: 24 }}>
            {(company?.features || []).map((f, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ color: "var(--honey)", fontFamily: "var(--font-mono)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Specifications</p>
          <h2 style={{ color: "var(--cream)", fontSize: "1.8rem" }}>Standard sizes &amp; thickness</h2>

          <div style={{ marginTop: 20 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--honey-light)" }}>
              SIZES
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {(company?.standardSizes || []).map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    padding: "8px 12px",
                    border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: 4,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--honey-light)" }}>
              THICKNESS
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {(company?.standardThickness || []).map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    padding: "8px 12px",
                    border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: 4,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
