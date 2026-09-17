import { useState } from "react";
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { TextField, SelectField, TextAreaField } from "./FormField";
import { useFormState, required, validEmail, validPhone } from "../hooks/useFormState";
import { submitLead } from "../utils/submitLead";

const serviceOptions = [
  "Physical Technical & Security Systems",
  "Networking",
  "IT Infrastructure",
  "IAM & Cybersecurity",
  "Cloud & Email",
  "Business Software",
  "Web Design & Development",
  "Technical Support",
  "Starlink & Connectivity",
  "Other",
];

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const validators = {
  name: required("Full name"),
  email: validEmail("Email"),
  phone: validPhone("Phone number"),
  service: required("Service required"),
  message: required("Message"),
};

export default function ContactForm() {
  const { values, errors, status, handleChange, submit, reset } = useFormState(
    initialValues,
    validators
  );
  const [serverError, setServerError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const ok = await submit((payload) => submitLead("contact", payload));
    if (!ok) setServerError("Something went wrong. Please try again, or call us directly.");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-techblue-500/20 bg-sky-100 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto text-techblue-500" size={40} />
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
          Thank you. Your message has been received.
        </h3>
        <p className="mt-2 text-sm text-ink-500">
          AiroLink will review your message and get back to you shortly.
        </p>
        <button onClick={reset} className="btn-secondary mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Name"
          name="name"
          required
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />
        <TextField
          label="Company"
          name="company"
          value={values.company}
          onChange={handleChange}
          error={errors.company}
          autoComplete="organization"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          required
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          autoComplete="tel"
        />
      </div>
      <SelectField
        label="Service Required"
        name="service"
        required
        value={values.service}
        onChange={handleChange}
        error={errors.service}
        options={serviceOptions}
      />
      <TextAreaField
        label="Message"
        name="message"
        required
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell us briefly what you need help with..."
      />

      {serverError && (
        <p className="flex items-center gap-2 text-sm font-medium text-red-500">
          <AlertTriangle size={16} />
          {serverError}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
        {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
