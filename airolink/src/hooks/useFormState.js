import { useState, useCallback } from "react";

// Lightweight, dependency-free form state + validation hook.
// `validators` is a map of field name -> (value, allValues) => errorString|undefined
export function useFormState(initialValues, validators = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }, []);

  const validate = useCallback(() => {
    const nextErrors = {};
    Object.entries(validators).forEach(([field, validator]) => {
      const message = validator(values[field], values);
      if (message) nextErrors[field] = message;
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [validators, values]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
  }, [initialValues]);

  // submitFn should return a Promise; wired up so a real API/email
  // integration can be dropped in later without changing the form UI.
  const submit = useCallback(
    async (submitFn) => {
      if (!validate()) return false;
      setStatus("submitting");
      try {
        await submitFn(values);
        setStatus("success");
        return true;
      } catch (err) {
        setStatus("error");
        return false;
      }
    },
    [validate, values]
  );

  return { values, errors, status, handleChange, validate, submit, reset, setValues };
}

export const required = (label) => (value) =>
  value && String(value).trim().length > 0 ? undefined : `${label} is required.`;

export const validEmail = (label = "Email") => (value) => {
  if (!value) return `${label} is required.`;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(value) ? undefined : "Enter a valid email address.";
};

export const validPhone = (label = "Phone number") => (value) => {
  if (!value) return `${label} is required.`;
  const re = /^[0-9+\s()-]{7,20}$/;
  return re.test(value) ? undefined : "Enter a valid phone number.";
};

// Simulates a network call. Swap this out for a real API/email service call —
// see src/utils/submitLead.js for where to wire that in.
export const mockSubmit = (payload) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.02) {
        reject(new Error("Network error"));
      } else {
        resolve(payload);
      }
    }, 900);
  });
