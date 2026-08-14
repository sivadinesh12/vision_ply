export default function Footer({ company }) {
  return (
    <footer
      style={{
        background: "var(--espresso)",
        color: "var(--parchment-deep)",
        padding: "36px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <p style={{ margin: 0, fontSize: "0.85rem" }}>
          © {new Date().getFullYear()} {company?.name || "OLYMPIC TRADERS"}. All
          Rights Reserved.
        </p>
        <div style={{ display: "flex", gap: 18 }}>
          {company?.social?.facebook && (
            <a href={company.social.facebook}>Facebook</a>
          )}
          {company?.social?.twitter && (
            <a href={company.social.twitter}>Twitter</a>
          )}
          {company?.social?.youtube && (
            <a href={company.social.youtube}>YouTube</a>
          )}
        </div>
      </div>
    </footer>
  );
}
