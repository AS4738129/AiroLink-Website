import { useState } from "react";
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { TextField, SelectField, TextAreaField, RadioGroupField } from "./FormField";
import { useFormState, required, validEmail, validPhone } from "../hooks/useFormState";
import { submitLead } from "../utils/submitLead";

const issueCategoryOptions = [
  "Network / Connectivity",
  "Server",
  "Computer / Hardware",
  "Software",
  "Security",
  "CCTV / Access Control",
  "Email / Cloud",
  "Other",
];

const priorityOptions = ["Low", "Medium", "High", "Critical"];
const contactMethodOptions = ["Phone Call", "WhatsApp", "Email"];

const initialValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  issueCategory: "",
  priority: "",
  description: "",
  contactMethod: "",
};

const validators = {
  name: required("Name"),
  phone: validPhone("Phone number"),
  email: validEmail("Email"),
  issueCategory: required("Issue category"),
  priority: required("Priority"),
  description: required("Description"),
  contactMethod: required("Preferred support method"),
};

export default function SupportForm() {
  const { values, errors, status, handleChange, submit, reset } = useFormState(
    initialValues,
    validators
  );
  const [serverError, setServerError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const ok = await submit((payload) => submitLead("support", payload));
    if (!ok) setServerError("Something went wrong submitting your ticket. Please try again, or call us directly.");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-techblue-500/20 bg-sky-100 p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-techblue-500" size={44} />
        <h3 className="mt-4 font-display text-2xl font-semibold text-navy-900">
          Your support request has been received.
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-500">
          Our support team will reach out using your preferred contact method,
          prioritised according to the urgency you selected.
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
          label="Phone"
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

      <SelectField
        label="Issue Category"
        name="issueCategory"
        required
        value={values.issueCategory}
        onChange={handleChange}
        error={errors.issueCategory}
        options={issueCategoryOptions}
      />

      <RadioGroupField
        label="Priority"
        name="priority"
        required
        value={values.priority}
        onChange={handleChange}
        options={priorityOptions}
      />
      {errors.priority && (
        <p className="-mt-4 text-xs font-medium text-red-500">{errors.priority}</p>
      )}

      <TextAreaField
        label="Description"
        name="description"
        required
        placeholder="Describe the issue you're experiencing..."
        value={values.description}
        onChange={handleChange}
        error={errors.description}
      />

      <RadioGroupField
        label="Preferred Support Method"
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
        {status === "submitting" ? "Submitting..." : "Request Technical Support"}
      </button>
    </form>
  );
}
