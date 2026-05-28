import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

function FormField({
  label,
  fullWidth = false,
  className = "",
  children,
}: FormFieldProps) {
  return (
    <label
      className={`ui-form-field ${fullWidth ? "ui-form-field--full" : ""} ${className}`.trim()}
    >
      <span className="ui-form-field__label">{label}</span>
      {children}
    </label>
  );
}

export default FormField;
