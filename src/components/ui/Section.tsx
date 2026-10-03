import type { ReactNode } from "react";
import { useReveal } from "../../lib/useReveal";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  noBorder?: boolean;
}

export function Section({ id, children, className = "", noBorder }: Props) {
  const ref = useReveal();

  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${noBorder ? "" : "border-t border-border"} ${className}`}
    >
      <div className="container-main reveal" ref={ref}>
        {children}
      </div>
    </section>
  );
}
