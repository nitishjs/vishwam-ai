import { HTMLAttributes, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-20 lg:py-28 ${className ?? ""}`}
      {...props}
    >
      {children}
    </section>
  );
}