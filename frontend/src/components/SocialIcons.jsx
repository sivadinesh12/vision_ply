// Simple, monochrome inline icons so we don't depend on an icon font or
// external requests. `size` controls the button diameter in px.
const ICONS = {
  whatsapp: (
    <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.36.688 4.56 1.876 6.41L4 29l7.77-1.84A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm6.98 17.02c-.29.82-1.44 1.5-2.36 1.7-.63.13-1.45.24-4.21-.9-3.53-1.46-5.8-5.03-5.98-5.27-.17-.24-1.43-1.9-1.43-3.63 0-1.72.9-2.57 1.22-2.92.29-.32.7-.47 1.11-.47.14 0 .26 0 .38.01.33.02.5.04.72.55.29.68.98 2.4 1.06 2.58.09.18.15.38.03.62-.11.24-.17.38-.34.58-.17.2-.35.44-.5.6-.17.17-.34.35-.15.68.19.33.85 1.4 1.83 2.27 1.26 1.12 2.31 1.47 2.65 1.63.24.11.53.09.73-.12.24-.26.54-.7.85-1.13.22-.31.5-.35.83-.23.34.12 2.13 1 2.5 1.18.36.18.6.27.69.42.09.16.09.9-.19 1.71z" />
  ),
  instagram: (
    <path d="M11.2 4h9.6A7.2 7.2 0 0 1 28 11.2v9.6A7.2 7.2 0 0 1 20.8 28h-9.6A7.2 7.2 0 0 1 4 20.8v-9.6A7.2 7.2 0 0 1 11.2 4zm-.2 2.4a4.6 4.6 0 0 0-4.6 4.6v10a4.6 4.6 0 0 0 4.6 4.6h10a4.6 4.6 0 0 0 4.6-4.6V11a4.6 4.6 0 0 0-4.6-4.6h-10zM16 10.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4zm0 2.4a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm5.6-3.9a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
  ),
  x: (
    <path d="M18.9 5h3.4l-7.4 8.5L23.6 27h-6.8l-5.3-6.9L5.4 27H2l7.9-9.1L1.8 5h7l4.8 6.3L18.9 5zm-1.2 20h1.9L9.4 6.9H7.4L17.7 25z" />
  ),
  youtube: (
    <path d="M27.5 10.4a3.5 3.5 0 0 0-2.5-2.5C22.9 7.3 16 7.3 16 7.3s-6.9 0-9 .6a3.5 3.5 0 0 0-2.5 2.5A36.6 36.6 0 0 0 4 16a36.6 36.6 0 0 0 .5 5.6 3.5 3.5 0 0 0 2.5 2.5c2.1.6 9 .6 9 .6s6.9 0 9-.6a3.5 3.5 0 0 0 2.5-2.5A36.6 36.6 0 0 0 28 16a36.6 36.6 0 0 0-.5-5.6zM13.3 19.8v-7.6l6.6 3.8-6.6 3.8z" />
  ),
  linkedin: (
    <path d="M7.2 10.9h4v13.2h-4V10.9zm2-6.4a2.3 2.3 0 1 1 0 4.7 2.3 2.3 0 0 1 0-4.7zM13.6 10.9h3.8v1.8h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1v7.4h-4v-6.56c0-1.56-.03-3.58-2.18-3.58-2.18 0-2.51 1.7-2.51 3.46v6.68h-4V10.9z" />
  ),
};

const LABELS = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  x: "X (Twitter)",
  youtube: "YouTube",
  linkedin: "LinkedIn",
};

export default function SocialIcons({ social, size = 38, iconColor, bg }) {
  const entries = Object.keys(ICONS).filter((key) => social?.[key]);
  if (!entries.length) return null;

  return (
    <div style={{ display: "flex", gap: 10 }}>
      {entries.map((key) => (
        <a
          key={key}
          href={social[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit us on ${LABELS[key]}`}
          title={LABELS[key]}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: bg || "rgba(255,255,255,0.08)",
            transition: "background 0.2s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--honey)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = bg || "rgba(255,255,255,0.08)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <svg
            viewBox="0 0 32 32"
            width={size * 0.5}
            height={size * 0.5}
            fill={iconColor || "currentColor"}
            aria-hidden="true"
          >
            {ICONS[key]}
          </svg>
        </a>
      ))}
    </div>
  );
}
