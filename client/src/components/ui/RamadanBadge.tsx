import { Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface RamadanBadgeProps {
  className?: string;
  children?: React.ReactNode;
}

export function RamadanBadge({ className, children = "Promo Berkah Ramadan" }: RamadanBadgeProps) {
  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
      "bg-gradient-to-r from-accent/20 to-accent/10 text-accent-foreground border border-accent/30",
      "shadow-sm shadow-accent/5",
      className
    )}>
      <Moon className="w-3.5 h-3.5 text-accent" />
      <span>{children}</span>
    </div>
  );
}
