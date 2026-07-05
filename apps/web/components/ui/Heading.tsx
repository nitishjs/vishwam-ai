import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
      {children}
    </h2>
  );
}