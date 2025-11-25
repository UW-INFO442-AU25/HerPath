import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  const whiteGradient =
    "repeating-linear-gradient(100deg, #ffffff 0%, #ffffff 7%, transparent 10%, transparent 12%, #ffffff 16%)";
  const darkGradient =
    "repeating-linear-gradient(100deg, #000000 0%, #000000 7%, transparent 10%, transparent 12%, #000000 16%)";
  const aurora =
    "repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #c4b5fd 25%, #60a5fa 30%)";

  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Light mode aurora */}
          <div
            className={cn(
              "absolute -inset-[10px] opacity-70 will-change-transform pointer-events-none filter blur-[10px] invert dark:hidden",
              showRadialGradient &&
                "mask-[radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
            )}
            style={{
              backgroundImage: `${whiteGradient}, ${aurora}`,
              backgroundSize: "300%, 200%",
              backgroundPosition: "50% 50%, 50% 50%",
            }}
          >
            <div
              className="absolute inset-0 animate-aurora mix-blend-difference"
              style={{
                backgroundImage: `${whiteGradient}, ${aurora}`,
                backgroundSize: "200%, 100%",
                backgroundAttachment: "fixed",
              }}
            />
          </div>
          {/* Dark mode aurora */}
          <div
            className={cn(
              "hidden dark:block absolute -inset-[10px] opacity-70 will-change-transform pointer-events-none filter blur-[10px]",
              showRadialGradient &&
                "mask-[radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
            )}
            style={{
              backgroundImage: `${darkGradient}, ${aurora}`,
              backgroundSize: "300%, 200%",
              backgroundPosition: "50% 50%, 50% 50%",
            }}
          >
            <div
              className="absolute inset-0 animate-aurora mix-blend-difference"
              style={{
                backgroundImage: `${darkGradient}, ${aurora}`,
                backgroundSize: "200%, 100%",
                backgroundAttachment: "fixed",
              }}
            />
          </div>
        </div>
        <div className="relative z-10 w-full">{children}</div>
      </div>
    </main>
  );
};
