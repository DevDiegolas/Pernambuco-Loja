import type { ReactNode } from "react";
import Container from "../../components/ui/Container";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, actions }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -bottom-32 h-[360px] w-[360px] rounded-full bg-brand-600/30 blur-3xl"
      />
      <Container className="relative py-16 sm:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-stone-300 sm:text-lg">
            {description}
          </p>
        )}
        {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
      </Container>
    </section>
  );
}
