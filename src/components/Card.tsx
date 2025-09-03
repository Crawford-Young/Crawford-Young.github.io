import type React from "react";

type CardProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
};

export default function Card({ children, as: Tag = "div", href }: CardProps) {
  const className =
    "group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors" +
    " shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_10px_30px_-15px_rgba(0,0,0,0.6)]" +
    " backdrop-blur px-5 py-4";
  if (href && Tag === "a") {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return <Tag className={className}>{children}</Tag>;
}


