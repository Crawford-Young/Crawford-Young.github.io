import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20 scroll-mt-24", className)}>
      {title && (
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-muted-foreground text-base md:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
