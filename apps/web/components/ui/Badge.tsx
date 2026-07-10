import { HTMLAttributes } from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "outline";
} & HTMLAttributes<HTMLSpanElement>;
export default function Badge({
    children,
    variant = "primary",
className,
    ...props
}: BadgeProps) {const variantStyles = {
  primary:
    "bg-primary/10 text-primary border border-primary/20",

  secondary:
    "bg-secondary text-secondary-foreground",

  success:
    "bg-green-100 text-green-700 border border-green-200",

  outline:
    "border border-border bg-transparent text-foreground",
};

const badgeClasses = `
  inline-flex
  items-center
  rounded-full
  px-3
  py-1
  text-sm
  font-medium
  transition-colors
  duration-200
  ${variantStyles[variant]}
  ${className ?? ""}
`;
return (
  <span className={badgeClasses} {...props}>
    {children}
  </span>
);
}