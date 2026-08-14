import { useState } from "react";
import { api } from "../api";

const initialForm = { name: "", email: "", phone: "", message: "" };

// Client's WhatsApp business number (with country code, no + or spaces)
const WHATSAPP_NUMBER = "917868041691";

function buildWhatsAppLink(form) {
  const text =
    `New enquiry from the website:\n` +
    `Name: ${form.name}\n` +
    `Phone: ${form.phone}\n` +
    `Email: ${form.email}\n` +
    `Message: ${form.message}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Contact({ company }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", error: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: "submitting", error: "" });
    try {
      // Save to the database first so nothing is lost even if the visitor
      // closes the WhatsApp tab without hitting send there.
      await api.submitContact(form);
      setStatus({ state: "success", error: "" });

      // Hand off to WhatsApp with the message pre-filled, addressed to the
      // client's business number. The visitor just needs to tap Send.
      window.open(buildWhatsAppLink(form), "_blank", "noopener,noreferrer");

      setForm(initialForm);
    } catch (err) {
      setStatus({ state: "error", error: err.message });
    }
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--parchment-deep)" }}>
      <div className="container two-col">
        <div>
          <p className="eyebrow">Get In Touch</p>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)" }}>Contact Us</h2>
          <p style={{ color: "var(--walnut)" }}>All fields are mandatory.</p>

          <dl style={{ marginTop: 28 }}>
            <div style={{ marginBottom: 18 }}>
              <dt style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--moss)" }}>
                ADDRESS
              </dt>
              <dd style={{ margin: 0, fontSize: "1rem" }}>{company?.address}</dd>
            </div>
            <div style={{ marginBottom: 18 }}>
              <dt style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--moss)" }}>
                MOBILE
              </dt>
              <dd style={{ margin: 0, fontSize: "1rem" }}>{company?.phone}</dd>
            </div>
            {company?.altPhone && (
              <div style={{ marginBottom: 18 }}>
                <dt style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--moss)" }}>
                  PHONE
                </dt>
                <dd style={{ margin: 0, fontSize: "1rem" }}>{company.altPhone}</dd>
              </div>
            )}
            <div>
              <dt style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--moss)" }}>
                EMAIL
              </dt>
              <dd style={{ margin: 0, fontSize: "1rem" }}>{company?.email}</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={submit}
          style={{
            background: "var(--cream)",
            borderRadius: "var(--radius)",
            padding: 32,
            boxShadow: "var(--shadow-soft)",
            display: "grid",
            gap: 16,
          }}
        >
          <Field label="Name" value={form.name} onChange={update("name")} required />
          <Field label="Email" type="email" value={form.email} onChange={update("email")} required />
          <Field label="Phone" value={form.phone} onChange={update("phone")} required />
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={update("message")}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <button type="submit" className="btn btn--primary" disabled={status.state === "submitting"}>
            {status.state === "submitting" ? "Sending…" : "Send via WhatsApp"}
          </button>

          {status.state === "success" && (
            <p style={{ color: "var(--moss)", margin: 0 }}>
              Saved — a WhatsApp tab has opened with your message ready to send.
            </p>
          )}
          {status.state === "error" && (
            <p style={{ color: "#a33", margin: 0 }}>{status.error}</p>
          )}

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.85rem",
              color: "var(--moss)",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Prefer to chat directly? Message us on WhatsApp
          </a>
        </form>
      </div>
    </section>
  );
}

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "0.78rem",
  color: "var(--moss)",
  marginBottom: 6,
};

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  border: "1px solid var(--line)",
  borderRadius: 4,
  fontFamily: "var(--font-body)",
  fontSize: "0.95rem",
  background: "#fff",
};

function Field({ label, ...props }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input style={inputStyle} {...props} />
    </div>
  );
}
