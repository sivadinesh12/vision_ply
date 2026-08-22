import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 style={{ fontSize: "2rem" }}>Page not found</h1>
        <p style={{ color: "var(--walnut)", marginBottom: 24 }}>
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
