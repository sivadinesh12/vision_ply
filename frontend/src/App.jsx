import { useEffect, useState } from "react";
import { api } from "./api";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VeneerDivider from "./components/VeneerDivider";
import Products from "./components/Products";
import Specs from "./components/Specs";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [company, setCompany] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([api.getCompanyInfo(), api.getProducts()])
      .then(([companyData, productData]) => {
        setCompany(companyData);
        setProducts(productData);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div style={{ padding: 60, textAlign: "center", fontFamily: "var(--font-body)" }}>
        <h2>Couldn't load the site content</h2>
        <p>{error}</p>
        <p style={{ color: "var(--walnut)" }}>
          Make sure the backend is running and seeded (<code>npm run seed</code>) at
          the URL configured in <code>vite.config.js</code>.
        </p>
      </div>
    );
  }

  if (!company) {
    return (
      <div style={{ padding: 60, textAlign: "center" }}>
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <>
      <Navbar company={company} />
      <Hero company={company} />
      <About company={company} />
      <VeneerDivider />
      <Products products={products} />
      <Specs company={company} />
      <Brands company={company} />
      <VeneerDivider tone="dark" />
      <Contact company={company} />
      <Footer company={company} />
    </>
  );
}
