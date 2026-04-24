import { ImageOff } from "lucide-react";
import { cn } from "../../lib/cn";

type Props = {
  label?: string;
  ratio?: "square" | "video" | "tall" | "wide";
  className?: string;
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  tall: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

export default function PlaceholderImage({
  label = "Foto em breve",
  ratio = "video",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "placeholder-img relative flex w-full items-center justify-center overflow-hidden rounded-2xl ring-1 ring-stone-200/70",
        ratioClass[ratio],
        className
      )}
      aria-label={label}
      role="img"
    >
      <div className="flex flex-col items-center gap-2 text-center text-stone-500">
        <ImageOff className="h-7 w-7 text-brand-500/70" />
        <span className="text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
}
