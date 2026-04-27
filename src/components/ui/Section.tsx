import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import Container from "./Container";
import Reveal from "./Reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Cor do eyebrow para fundos escuros */
  variant?: "default" | "dark";
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  variant = "default",
}: Props) {
  const dark = variant === "dark";
  return (
    <section
      id={id}
      className={cn(
        "relative",
        // padding generoso (clamp para escala fluida)
        "py-[clamp(64px,9vw,112px)]",
        className
      )}
    >
      <Container>
        {(eyebrow || title || description) && (
          <header className="mb-14 max-w-3xl">
            <Reveal direction="up" duration={650}>
              {eyebrow && (
                <p
                  className={cn(
                    "eyebrow",
                    dark && "eyebrow-light"
                  )}
                >
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2
                  className={cn(
                    "sec-title mt-4",
                    dark && "text-white"
                  )}
                >
                  {title}
                </h2>
              )}
              {description && (
                <p
                  className={cn(
                    "sec-sub mt-5 text-base sm:text-lg",
                    dark && "text-white/70"
                  )}
                >
                  {description}
                </p>
              )}
            </Reveal>
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
