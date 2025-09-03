type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-14 md:py-16 scroll-mt-24">
      {title && (
        <div className="mb-6">
          <h2 className="text-[22px] md:text-[28px] font-semibold tracking-[-0.02em]">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-foreground/70 text-[15px] md:text-[16px]">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}


