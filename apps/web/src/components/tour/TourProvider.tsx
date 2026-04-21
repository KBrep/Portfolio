"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronRight, ChevronLeft, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TourStep {
  target: string;
  title: string;
  content: string;
}

interface TourProviderProps {
  children: React.ReactNode;
  screenId: string;
  steps: TourStep[];
}

export default function TourProvider({ children, screenId, steps }: TourProviderProps) {
  const [active, setActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [hasSeenTour, setHasSeenTour] = useState(true);

  const storageKey = `tour_seen_${screenId}`;

  useEffect(() => {
    const seen = localStorage.getItem(storageKey);
    if (!seen) {
      setHasSeenTour(false);
      const timer = setTimeout(() => {
        setActive(true);
        localStorage.setItem(storageKey, "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
    setHasSeenTour(true);
  }, [storageKey]);

  const updateTargetRect = useCallback(() => {
    if (!active || !steps[currentStep]) return;
    const el = document.querySelector(steps[currentStep].target);
    if (el) {
      const rect = el.getBoundingClientRect();
      setTargetRect(rect);
    } else {
      setTargetRect(null);
    }
  }, [active, currentStep, steps]);

  useEffect(() => {
    updateTargetRect();
    window.addEventListener("resize", updateTargetRect);
    window.addEventListener("scroll", updateTargetRect);
    return () => {
      window.removeEventListener("resize", updateTargetRect);
      window.removeEventListener("scroll", updateTargetRect);
    };
  }, [updateTargetRect]);

  useEffect(() => {
    if (active && steps[currentStep]) {
      const el = document.querySelector(steps[currentStep].target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(updateTargetRect, 500);
      }
    }
  }, [active, currentStep, steps, updateTargetRect]);

  const closeTour = () => {
    setActive(false);
    setCurrentStep(0);
    setTargetRect(null);
  };

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      closeTour();
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const startTour = () => {
    setCurrentStep(0);
    setActive(true);
  };

  // Calculate tooltip position
  const getTooltipStyle = (): React.CSSProperties => {
    if (!targetRect) return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

    const padding = 16;
    const tooltipWidth = 320;
    const tooltipHeight = 180;
    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;

    // Position below the target by default
    let top = targetRect.bottom + padding;
    let left = targetRect.left;

    // If tooltip would go off-screen bottom, place above
    if (top + tooltipHeight > viewportH) {
      top = targetRect.top - tooltipHeight - padding;
    }

    // If tooltip would go off-screen right, align to right edge
    if (left + tooltipWidth > viewportW) {
      left = viewportW - tooltipWidth - padding;
    }

    // Ensure left is not negative
    if (left < padding) left = padding;

    // Ensure top is not negative
    if (top < padding) top = padding;

    return { top, left, position: "fixed" as const };
  };

  return (
    <>
      {children}

      {/* Tour trigger button */}
      {!active && (
        <button
          onClick={startTour}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity"
          aria-label="Start tour"
          data-tour="tour-button"
        >
          <HelpCircle size={18} />
        </button>
      )}

      {/* Tour overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999]"
          >
            {/* Light overlay */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
              onClick={closeTour}
            />

            {/* Spotlight */}
            {targetRect && (
              <div
                className="absolute tour-spotlight rounded-md pointer-events-none"
                style={{
                  top: targetRect.top - 6,
                  left: targetRect.left - 6,
                  width: targetRect.width + 12,
                  height: targetRect.height + 12,
                  border: "3px solid rgba(255, 255, 255, 0.8)",
                  boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.25)",
                  zIndex: 10000,
                }}
              />
            )}

            {/* Tooltip */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-background border shadow-xl rounded-lg p-5 w-80 z-[10001]"
              style={getTooltipStyle()}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">
                    Step {currentStep + 1} of {steps.length}
                  </p>
                  <h3 className="text-sm font-semibold tracking-tight">
                    {steps[currentStep]?.title}
                  </h3>
                </div>
                <button
                  onClick={closeTour}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                  <X size={14} />
                </button>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {steps[currentStep]?.content}
              </p>

              <div className="flex items-center justify-between">
                <button
                  onClick={prev}
                  disabled={currentStep === 0}
                  className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={12} />
                  Previous
                </button>
                <button
                  onClick={next}
                  className="flex items-center gap-1 text-xs font-medium bg-foreground text-background px-3 py-1.5 rounded hover:opacity-80 transition-opacity"
                >
                  {currentStep === steps.length - 1 ? "Finish" : "Next"}
                  {currentStep < steps.length - 1 && <ChevronRight size={12} />}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
