import { Link } from "react-router-dom";

export default function PageHeader({ eyebrow, title, crumbs = [] }) {
  return (
    <section
      style={{
        background:
          "linear-gradient(115deg, var(--espresso) 0%, var(--walnut) 100%)",
        padding: "56px 0 40px",
      }}
    >
      <div className="container">
        {eyebrow && (
          <p className="eyebrow" style={{ color: "var(--honey-light)" }}>
            {eyebrow}
          </p>
        )}
        <h1 style={{ color: "var(--cream)", fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)", margin: "0 0 10px" }}>
          {title}
        </h1>
        <nav aria-label="Breadcrumb" style={{ fontSize: "0.85rem" }}>
          <Link to="/" style={{ color: "var(--parchment-deep)" }}>
            Home
          </Link>
          {crumbs.map((c, i) => (
            <span key={i}>
              <span style={{ color: "var(--walnut-light)", margin: "0 8px" }}>/</span>
              {c.to ? (
                <Link to={c.to} style={{ color: "var(--parchment-deep)" }}>
                  {c.label}
                </Link>
              ) : (
                <span style={{ color: "var(--honey-light)" }}>{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
