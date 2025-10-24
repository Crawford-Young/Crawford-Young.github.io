import type React from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  className?: string;
};

export default function Card({
  children,
  as: Tag = "div",
  href,
  className,
}: CardProps) {
  const baseClassName = cn(
    "group rounded-xl border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300",
    "shadow-sm hover:shadow-md backdrop-blur-sm px-6 py-5",
    "hover:border-border/80 hover:scale-[1.02]",
    className
  );

  if (href && Tag === "a") {
    return (
      <a className={baseClassName} href={href}>
        {children}
      </a>
    );
  }
  return <Tag className={baseClassName}>{children}</Tag>;
}
