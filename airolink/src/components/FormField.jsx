export function TextField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required,
  placeholder,
  autoComplete,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label} {required && <span className="text-techblue-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-ink-300 focus:border-techblue-500 focus:outline-none focus:ring-2 focus:ring-techblue-500/20 ${
          error ? "border-red-400" : "border-navy-900/15"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export function SelectField({
  label,
  name,
  value,
  onChange,
  error,
  options,
  required,
  placeholder = "Select an option",
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label} {required && <span className="text-techblue-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-navy-900 focus:border-techblue-500 focus:outline-none focus:ring-2 focus:ring-techblue-500/20 ${
          error ? "border-red-400" : "border-navy-900/15"
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  value,
  onChange,
  error,
  required,
  placeholder,
  rows = 5,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label} {required && <span className="text-techblue-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full resize-none rounded-lg border bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-ink-300 focus:border-techblue-500 focus:outline-none focus:ring-2 focus:ring-techblue-500/20 ${
          error ? "border-red-400" : "border-navy-900/15"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export function RadioGroupField({ label, name, value, onChange, options, required }) {
  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-medium text-navy-900">
        {label} {required && <span className="text-techblue-500">*</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const checked = value === opt;
          return (
            <label
              key={opt}
              className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                checked
                  ? "border-techblue-500 bg-techblue-500/10 text-techblue-500"
                  : "border-navy-900/15 text-ink-700 hover:border-techblue-500/40"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={opt}
                checked={checked}
                onChange={onChange}
                className="sr-only"
              />
              {opt}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
