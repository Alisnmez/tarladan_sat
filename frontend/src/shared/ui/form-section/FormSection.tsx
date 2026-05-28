import type { ReactNode } from "react";

type FormSectionProps = {
  title: string;
  icon?: string;
  className?: string;
  children: ReactNode;
};

function FormSection({ title, icon, className = "", children }: FormSectionProps) {
  return (
    <section className={`ui-form-section ${className}`.trim()}>
      <div className="ui-form-section__header">
        {icon ? <span className="material-symbols-outlined">{icon}</span> : null}
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  );
}

export default FormSection;
