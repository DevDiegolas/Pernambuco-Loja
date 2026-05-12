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
  src: string;
  alt: string;
  label?: string;
  ratio?: Ratio;
  className?: string;
  imageClassName?: string;
  style?: CSSProperties;
};

export default function StoreImage({
  src,
  alt,
  label,
  ratio = "video",
  className,
  imageClassName,
  style,
}: Props) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden bg-stone-200",
        ratioClass[ratio],
        className
      )}
      style={style}
    >
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", imageClassName)}
        loading="lazy"
        decoding="async"
      />
      {label && (
        <figcaption className="absolute bottom-3 left-3 rounded-md bg-black/45 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          {label}
        </figcaption>
      )}
    </figure>
  );
}
