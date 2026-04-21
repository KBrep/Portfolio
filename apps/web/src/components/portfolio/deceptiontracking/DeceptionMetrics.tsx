"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "6", label: "Biosignal Types" },
  { value: "2", label: "Interaction Scenarios" },
  { value: "3", label: "Feedback Variations" },
  { value: "0", label: "Formal Testing Sessions" },
  { value: "8", label: "Sources Reviewed" },
  { value: "4", label: "Ethical Tensions Mapped" },
  { value: "1", label: "Conceptual Framework" },
];

export default function DeceptionMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
        Key Metrics
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
        {metrics.map((metric: Metric, i: number) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.06 * i }}
            className="bg-background p-6 sm:p-8"
          >
            <p className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              {metric.value}
            </p>
            <p className="text-xs tracking-wider uppercase text-muted-foreground">
              {metric.label}
            </p>
          </motion.div>
        ))}
        {/* Empty cell to complete the grid */}
        <div className="bg-background p-6 sm:p-8 hidden lg:block" />
      </div>
    </motion.section>
  );
}
