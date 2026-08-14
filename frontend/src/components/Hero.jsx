import { useEffect, useState } from "react";

export default function Hero({ company }) {
  const slides = company?.heroSlides?.length
    ? company.heroSlides
    : ["/images/banners/banner1.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--espresso)",
      }}
    >
      {slides.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(115deg, rgba(36,24,19,0.88) 20%, rgba(36,24,19,0.35) 65%), url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />
      ))}

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <p className="eyebrow" style={{ color: "var(--honey-light)" }}>
          {company?.tagline || "Engineered Wood, Uncompromised Quality"}
        </p>
        <h1
          style={{
            color: "var(--cream)",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            maxWidth: 640,
          }}
        >
          Welcome to {company?.name || "OLYMPIC TRADERS"}
        </h1>
        <p
          style={{
            color: "var(--parchment-deep)",
            fontSize: "1.1rem",
            maxWidth: 560,
          }}
        >
          {company?.aboutShort ||
            "Where technology, quality and aesthetics blend to meet every customer's needs."}
        </p>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 8 }}
        >
          <a href="#products" className="btn btn--primary">
            View Products
          </a>
          <a href="#about" className="btn btn--outline">
            Learn More
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 10,
          zIndex: 2,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === index ? 26 : 10,
              height: 4,
              borderRadius: 2,
              border: "none",
              background:
                i === index ? "var(--honey)" : "rgba(255,255,255,0.4)",
              transition: "width 0.25s ease, background 0.25s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
