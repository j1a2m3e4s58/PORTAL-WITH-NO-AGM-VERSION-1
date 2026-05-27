import { cn } from "@/lib/utils";

function getLogoSrc() {
  if (
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/connected-sites/agm-pro")
  ) {
    return "/connected-sites/agm-pro/assets/images/bcb-logo.png";
  }
  return "/assets/images/bcb-logo.png";
}

export function AnimatedAgmMark({
  className,
  size = 64,
  animate = true,
  label = "AGM app mark",
}: {
  className?: string;
  size?: number;
  animate?: boolean;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#0b7d3b]/25 bg-white shadow-[0_14px_34px_rgba(5,18,13,0.18)]",
        animate ? "agm-mark-pulse" : "",
        className,
      )}
      style={{ width: size, height: size }}
      aria-label={label}
      role="img"
    >
      <img
        src={getLogoSrc()}
        alt="Bawjiase Community Bank logo"
        className="h-full w-full object-contain"
        decoding="async"
      />
    </div>
  );
}
