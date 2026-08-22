import { useState } from "react";

// Renders <img src /> and falls back to a labeled placeholder box if the
// file doesn't exist yet (e.g. images not yet uploaded). Drop a real file
// at `src` and this automatically starts showing it — no code changes.
export default function ImageSlot({ src, alt, style }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="media-placeholder" style={style}>
        <span className="media-placeholder__icon" aria-hidden="true">
          🖼️
        </span>
        <p>Add your photo here</p>
        <code>{src}</code>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover", ...style }}
    />
  );
}
