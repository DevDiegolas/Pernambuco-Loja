import type { CSSProperties } from "react";
import { cn } from "../../lib/cn";

type Ratio = "square" | "video" | "tall" | "wide" | "free";

const ratioClass: Record<Ratio, string> = {
  square: "aspect-square",
  video: "aspect-video",
  tall: "aspect-[3/4]",
  wide: "aspect-[16/7]",
  free: "",
};

type Props = {
  /** Texto curto exibido no canto inferior esquerdo */
  label?: string;
  /** Proporção pré-definida (use "free" para preencher o pai) */
  ratio?: Ratio;
  /** Variante escura (sobre Hero ink-900) */
  dark?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function PlaceholderImage({
  label = "imagem",
  ratio = "video",
  dark = false,
  className,
  style,
}: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "ph rounded-2xl",
        dark && "ph-dark",
        ratioClass[ratio],
        className
      )}
      style={style}
    >
      <span className="ph-lbl">{label}</span>
    </div>
  );
}
