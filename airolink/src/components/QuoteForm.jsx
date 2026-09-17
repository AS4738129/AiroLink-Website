import { useState } from "react";
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { TextField, SelectField, TextAreaField, RadioGroupField } from "./FormField";
import { useFormState, required, validEmail, validPhone } from "../hooks/useFormState";
import { submitLead } from "../utils/submitLead";

const serviceCategoryOptions = [
  "Physical Technical & Security Systems",
  "Networking",
  "IT Infrastructure & Systems",
  "IAM & Cybersecurity",
  "Cloud & Productivity",
  "Business Software",
  "Web Design & Development",
  "IT Support & Maintenance",
  "Starlink & Connectivity",
  "Other",
];

const timelineOptions = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "1-3 months",
  "Still exploring options",
];

const contactMethodOptions = ["Phone Call", "WhatsApp", "Email"];

const initialValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  location: "",
  serviceCategory: "",
  description: "",
  timeline: "",
  contactMethod: "",
};

const validators = {
  name: required("Full name"),
  phone: validPhone("Phone number"),
  email: validEmail("Email"),
  location: required("Location"),
  serviceCategory: required("Service category"),
  description: required("Project description"),
  contactMethod: required("Preferred contact method"),
};

export default function QuoteForm({ presetService = "" }) {
  const { values, errors, status, handleChange, submit, reset, setValues } = useFormState(
    { ...initialValues, serviceCategory: presetService },
    validators
  );
  const [serverError, setServerError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const ok = await submit((payload) => submitLead("quote", payload));
    if (!ok) setServerError("Something went wrong submitting your request. Please try again, or call us directly.");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-techblue-500/20 bg-sky-100 p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-techblue-500" size={44} />
        <h3 className="mt-4 font-display text-2xl font-semibold text-navy-900">
          Thank you. Your request has been received.
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-500">
          AiroLink will review your requirements and contact you using your
          preferred contact method.
        </p>
        <button onClick={reset} className="btn-secondary mt-6">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Full Name"
          name="name"
          required
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />
        <TextField
          label="Company / Organization"
          name="company"
          value={values.company}
          onChange={handleChange}
          error={errors.company}
          autoComplete="organization"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Phone Number"
          name="phone"
          type="tel"
          required
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          autoComplete="tel"
        />
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
      </div>

      <TextField
        label="Location"
        name="location"
        required
        placeholder="e.g. Kumasi, Ghana"
        value={values.location}
        onChange={handleChange}
        error={errors.location}
      />

      <SelectField
        label="Service Category"
        name="serviceCategory"
        required
        value={values.serviceCategory}
        onChange={handleChange}
        error={errors.serviceCategory}
        options={serviceCategoryOptions}
      />

      <TextAreaField
        label="Project Description"
        name="description"
        required
        placeholder="Describe your requirements, site details or the challenge you're facing..."
        value={values.description}
        onChange={handleChange}
        error={errors.description}
      />

      <SelectField
        label="Estimated Project Timeline"
        name="timeline"
        value={values.timeline}
        onChange={handleChange}
        error={errors.timeline}
        options={timelineOptions}
      />

      <RadioGroupField
        label="Preferred Contact Method"
        name="contactMethod"
        required
        value={values.contactMethod}
        onChange={handleChange}
        options={contactMethodOptions}
      />
      {errors.contactMethod && (
        <p className="-mt-4 text-xs font-medium text-red-500">{errors.contactMethod}</p>
      )}

      {serverError && (
        <p className="flex items-center gap-2 text-sm font-medium text-red-500">
          <AlertTriangle size={16} />
          {serverError}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
        {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
        {status === "submitting" ? "Submitting..." : "Submit Quote Request"}
      </button>
    </form>
  );
}
