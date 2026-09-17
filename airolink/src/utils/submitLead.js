// Central place to send form submissions (quote requests, support tickets,
// contact messages) to a backend, serverless function or email service.
//
// The forms in this project already call `submitLead(formType, payload)` and
// handle loading/success/error state around it. To connect a real backend:
//
//   1. Set VITE_LEAD_API_URL in your .env (see .env.example).
//   2. Replace the body of this function with a real fetch() call, e.g.
//
//      export async function submitLead(formType, payload) {
//        const res = await fetch(import.meta.env.VITE_LEAD_API_URL, {
//          method: "POST",
//          headers: { "Content-Type": "application/json" },
//          body: JSON.stringify({ formType, ...payload }),
//        });
//        if (!res.ok) throw new Error("Failed to submit request");
//        return res.json();
//      }
//
// Never place API keys or credentials directly in frontend code — keep them
// on the backend/serverless function that this URL points to.
import { mockSubmit } from "../hooks/useFormState";

export async function submitLead(formType, payload) {
  const endpoint = import.meta.env.VITE_LEAD_API_URL;

  if (!endpoint) {
    // No backend configured yet — simulate a successful submission so the
    // UI/UX can be reviewed end-to-end before an API is wired up.
    return mockSubmit({ formType, ...payload });
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, ...payload }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit request");
  }

  return response.json();
}
