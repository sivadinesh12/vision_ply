import { companyInfo } from "../data/siteContent";
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import SocialIcons from "../components/SocialIcons";

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Get In Touch" title="Contact Us" crumbs={[{ label: "Contact Us" }]} />

      <Contact company={companyInfo} bare />

      <section className="section--tight" style={{ textAlign: "center" }}>
        <div className="container">
          <p className="eyebrow">Follow Us</p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
            <SocialIcons social={companyInfo.social} iconColor="var(--espresso)" bg="var(--parchment-deep)" />
          </div>
        </div>
      </section>
    </>
  );
}
