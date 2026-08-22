import { companyInfo } from "../data/siteContent";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Built on quality, technology and trust" crumbs={[{ label: "About Us" }]} />

      <section className="section">
        <div className="container two-col">
          <div
            style={{
              aspectRatio: "4 / 5",
              borderRadius: "var(--radius)",
              overflow: "hidden",
              background: "linear-gradient(160deg, var(--walnut), var(--espresso))",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <img
              src="/images/about/plywood.jpg"
              alt="Cross-section of engineered plywood layers"
              style={{ width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "luminosity", opacity: 0.85 }}
            />
          </div>

          <div>
            <p className="eyebrow">Our Story</p>
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)" }}>{companyInfo.name}</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--walnut)" }}>{companyInfo.aboutFull}</p>

            {companyInfo.certifications?.length > 0 && (
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
                {companyInfo.certifications.map((c) => (
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

      {companyInfo.whatWeOffer?.length > 0 && (
        <section className="section" style={{ background: "var(--parchment-deep)" }}>
          <div className="container">
            <p className="eyebrow">What Sets Us Apart</p>
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", maxWidth: 600 }}>
              Why builders and manufacturers choose us
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
                marginTop: 32,
              }}
            >
              {companyInfo.whatWeOffer.map((point, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--cream)",
                    borderRadius: "var(--radius)",
                    padding: "22px 20px",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  <span style={{ color: "var(--honey)", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ margin: "8px 0 0" }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
