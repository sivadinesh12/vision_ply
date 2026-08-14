const BASE = import.meta.env.VITE_API_URL;

async function handle(res) {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.json();
}

export const api = {
  getCompanyInfo: () => fetch(`${BASE}/company`).then(handle),
  getProducts: () => fetch(`${BASE}/products`).then(handle),
  submitContact: (payload) =>
    fetch(`${BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then(handle),
};
