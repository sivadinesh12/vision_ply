import { useState } from "react";

// Edit this array to change which three products are featured, their
// copy, and which image/video files they point to.
//
//   image -> put your photo at  frontend/public + this path
//   video -> put your video at  frontend/public + this path
//
// Nothing needs to change in the code below — until a file exists at
// that path, a placeholder is shown automatically; the moment you drop
// a matching file into /public, it starts rendering for real.
const FEATURED_PRODUCTS = [
  {
    slug: "marine-plywood",
    name: "Marine Plywood",
    tagline: "Built for water. Built to last.",
    description:
      "Our flagship marine-grade plywood is boil-water-resistant and engineered for the harshest, highest-moisture environments — boats, bathrooms, kitchens and outdoor structures.",
    image: "/images/showcase/marine-plywood.jpg",
    video: "/videos/marine-plywood.mp4",
  },
  {
    slug: "bwp-block-board",
    name: "BWP Block Board",
    tagline: "Boiling Water Proof, engineered to last decades.",
    description:
      "A dense, lightweight core wrapped in premium face veneers. BWP Block Board is our most trusted choice for doors, wardrobes and load-bearing furniture panels.",
    image: "/images/showcase/bwp-block-board.jpg",
    video: "/videos/bwp-block-board.mp4",
  },
  {
    slug: "decorative-veneers",
    name: "Decorative Veneers",
    tagline: "Natural finish, elevated interiors.",
    description:
      "Thin, premium wood veneers with rich, natural grain patterns — used to bring warmth and elegance to feature walls, panelling and high-end furniture.",
    image: "/images/showcase/decorative-veneers.jpg",
    video: "/videos/decorative-veneers.mp4",
  },
];

function ImageSlot({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="media-placeholder">
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
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

function VideoSlot({ src, label }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="media-placeholder media-placeholder--video">
        <span className="media-placeholder__icon" aria-hidden="true">
          ▶
        </span>
        <p>Video placeholder</p>
        <code>{src}</code>
      </div>
    );
  }

  return (
    <video
      src={src}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      onError={() => setFailed(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover", background: "#000" }}
    />
  );
}

export default function ProductShowcase() {
  return (
    <section id="featured-products" className="section">
      <div className="container">
        <p className="eyebrow">Featured Products</p>
        <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", maxWidth: 640 }}>
          A closer look at what we make
        </h2>
        <p style={{ color: "var(--walnut)", maxWidth: 620, fontSize: "1.05rem" }}>
          Three of our best-selling products, in detail — photos from our
          production floor and finished panels, alongside a short video of
          each.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 72, marginTop: 56 }}>
          {FEATURED_PRODUCTS.map((product, i) => (
            <article
              key={product.slug}
              className="showcase-row"
              style={{
                flexDirection: i % 2 === 1 ? "row-reverse" : "row",
              }}
            >
              <div className="showcase-row__media">
                <div className="showcase-row__media-item">
                  <ImageSlot src={product.image} alt={product.name} />
                </div>
                <div className="showcase-row__media-item">
                  <VideoSlot src={product.video} label={`${product.name} video`} />
                </div>
              </div>

              <div className="showcase-row__copy">
                <p className="eyebrow" style={{ marginBottom: 8 }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 style={{ fontSize: "1.6rem", marginBottom: 6 }}>{product.name}</h3>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    color: "var(--honey)",
                    fontSize: "1.05rem",
                    marginBottom: 14,
                  }}
                >
                  {product.tagline}
                </p>
                <p style={{ color: "var(--walnut)" }}>{product.description}</p>
                <a href="#contact" className="btn btn--primary" style={{ marginTop: 8 }}>
                  Enquire about this product
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
