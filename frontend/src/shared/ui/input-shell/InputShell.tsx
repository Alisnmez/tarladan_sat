import type { ReactNode } from "react";

type InputShellProps = {
  icon?: string;
  className?: string;
  children: ReactNode;
};

function InputShell({ icon, className = "", children }: InputShellProps) {
  return (
    <div className={`ui-input-shell ${className}`.trim()}>
      {icon ? <span className="material-symbols-outlined">{icon}</span> : null}
      {children}
    </div>
  );
}

export default InputShell;
