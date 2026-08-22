import { Link } from "react-router-dom";
import { catalogues } from "../data/siteContent";
import SocialIcons from "./SocialIcons";

export default function Footer({ company }) {
  return (
    <footer style={{ background: "var(--espresso)", color: "var(--parchment-deep)" }}>
      <div className="container" style={{ padding: "56px 24px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1.1fr",
            gap: 32,
          }}
          className="footer-grid"
        >
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--cream)", marginBottom: 10 }}>
              {company?.name || "OLYMPIC TRADERS"}
            </p>
            <p style={{ fontSize: "0.88rem", maxWidth: 280 }}>{company?.aboutShort}</p>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--honey-light)", textTransform: "uppercase", marginBottom: 12 }}>
              Quick Links
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "0.9rem" }}>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact Us</Link>
            </nav>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--honey-light)", textTransform: "uppercase", marginBottom: 12 }}>
              Products
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: "0.9rem" }}>
              {catalogues.map((c) => (
                <Link key={c.slug} to={`/products/${c.slug}`}>
                  {c.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--honey-light)", textTransform: "uppercase", marginBottom: 12 }}>
              Contact
            </p>
            <p style={{ fontSize: "0.88rem", margin: "0 0 6px" }}>{company?.address}</p>
            <p style={{ fontSize: "0.88rem", margin: "0 0 6px" }}>{company?.phone}</p>
            <p style={{ fontSize: "0.88rem", margin: "0 0 16px" }}>{company?.email}</p>
            <SocialIcons social={company?.social} size={34} />
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div
          className="container"
          style={{
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} {company?.name || "OLYMPIC TRADERS"}. All Rights Reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
