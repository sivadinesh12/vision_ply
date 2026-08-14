import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar({ company }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(36,24,19,0.97)" : "transparent",
        transition: "background 0.25s ease",
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
        <a
          href="#home"
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
        </a>

        <nav
          style={{
            display: "flex",
            gap: 36,
          }}
          className="nav-desktop"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontWeight: 500,
                fontSize: "0.95rem",
                color: scrolled ? "var(--parchment)" : "var(--espresso)",
              }}
            >
              {l.label}
            </a>
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
          ☰
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
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "10px 0",
                color: "var(--parchment)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {l.label}
            </a>
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
