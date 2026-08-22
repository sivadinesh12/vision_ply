import { companyInfo } from "../data/siteContent";

export default function WhatsAppButton() {
  const number = companyInfo.whatsappNumber;
  return (
    <a
      href={`https://wa.me/${number}?text=${encodeURIComponent(
        "Hi, I'd like to know more about your products."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        right: 22,
        bottom: 22,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        zIndex: 100,
      }}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.36.688 4.56 1.876 6.41L4 29l7.77-1.84A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm6.98 17.02c-.29.82-1.44 1.5-2.36 1.7-.63.13-1.45.24-4.21-.9-3.53-1.46-5.8-5.03-5.98-5.27-.17-.24-1.43-1.9-1.43-3.63 0-1.72.9-2.57 1.22-2.92.29-.32.7-.47 1.11-.47.14 0 .26 0 .38.01.33.02.5.04.72.55.29.68.98 2.4 1.06 2.58.09.18.15.38.03.62-.11.24-.17.38-.34.58-.17.2-.35.44-.5.6-.17.17-.34.35-.15.68.19.33.85 1.4 1.83 2.27 1.26 1.12 2.31 1.47 2.65 1.63.24.11.53.09.73-.12.24-.26.54-.7.85-1.13.22-.31.5-.35.83-.23.34.12 2.13 1 2.5 1.18.36.18.6.27.69.42.09.16.09.9-.19 1.71z" />
      </svg>
    </a>
  );
}
