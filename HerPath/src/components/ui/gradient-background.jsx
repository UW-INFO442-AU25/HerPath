import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Default_Gradients = [
  "linear-gradient(135deg, #ffffff 0%, #fce7e7 100%)",
  "linear-gradient(135deg, #fce7e7 0%, #f9d5d5 100%)",
  "linear-gradient(135deg, #f9d5d5 0%, #fce7e7 100%)",
  "linear-gradient(135deg, #fce7e7 0%, #ffffff 100%)",
  "linear-gradient(135deg, #ffffff 0%, #fce7e7 100%)",
];

export function GradientBackground({
  children,
  className = "",
  gradients = Default_Gradients,
  animationDuration = 8,
  animationDelay = 0.5,
  overlay = false,
  overlayOpacity = 0.3,
  enableCenterContent = false,
  ...props
}) {
  return (
    <div
      className={cn("w-full relative min-h-screen overflow-hidden", className)}
      {...props}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{ background: gradients[0] }}
        animate={{ background: gradients }}
        transition={{
          delay: animationDelay,
          duration: animationDuration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Optional overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content wrapper */}
      {children && (
        <div
          className={cn(
            "relative z-10",
            enableCenterContent &&
              "flex min-h-screen items-center justify-center"
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
