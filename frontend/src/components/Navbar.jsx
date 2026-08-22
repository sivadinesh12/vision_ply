import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar({ company }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = (isActive) => {
    if (isActive) return "var(--honey)";
    return scrolled ? "var(--parchment)" : "var(--espresso)";
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(36,24,19,0.97)" : "var(--parchment)",
        boxShadow: scrolled ? "0 4px 16px rgba(0,0,0,0.12)" : "none",
        transition: "background 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 78,
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.4rem",
            fontWeight: 700,
            color: scrolled ? "var(--cream)" : "var(--espresso)",
            letterSpacing: "0.01em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "70vw",
          }}
        >
          {company?.name || "OLYMPIC TRADERS"}
        </Link>

        <nav style={{ display: "flex", gap: 36 }} className="nav-desktop">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              style={({ isActive }) => ({
                fontWeight: 600,
                fontSize: "0.95rem",
                color: linkColor(isActive),
                borderBottom: isActive ? "2px solid var(--honey)" : "2px solid transparent",
                paddingBottom: 4,
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="nav-toggle"
          aria-label="Toggle navigation"
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            fontSize: "1.6rem",
            color: scrolled ? "var(--cream)" : "var(--espresso)",
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div
          style={{
            background: "var(--espresso)",
            padding: "12px 24px 24px",
          }}
        >
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display: "block",
                padding: "10px 0",
                color: isActive ? "var(--honey)" : "var(--parchment)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 780px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
