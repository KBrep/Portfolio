"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "5", label: "Design Phases" },
  { value: "1", label: "Historical Case Study" },
  { value: "0", label: "Formal User Tests" },
  { value: "1", label: "Ancient Inspiration" },
];

export default function KnotItDownMetrics() {
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

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
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
      </div>
    </motion.section>
  );
}
