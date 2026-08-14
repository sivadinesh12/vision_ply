// Signature element: a cross-section of plywood layers, echoing the product
// itself, used as a rhythm-setting divider between sections instead of a
// plain <hr>. Each stripe represents one laminated veneer ply.
export default function VeneerDivider({ tone = "light" }) {
  const bands =
    tone === "light"
      ? ["#e4d7c1", "#c68642", "#e4d7c1", "#5b3a29", "#e4d7c1"]
      : ["#3a271c", "#c68642", "#3a271c", "#7a5138", "#3a271c"];

  return (
    <div
      aria-hidden="true"
      style={{
        display: "flex",
        height: 10,
        width: "100%",
      }}
    >
      {bands.map((color, i) => (
        <div
          key={i}
          style={{
            flex: i === 1 || i === 3 ? 1.6 : 1,
            background: color,
          }}
        />
      ))}
    </div>
  );
}
