"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const feedbackThemes = [
  {
    theme: "Clarity",
    insight:
      "Participants valued the plain-language AI summaries but found some data visualisations still required clinical context to interpret confidently.",
  },
  {
    theme: "Emotional Resonance",
    insight:
      "The companion framing consistently generated positive emotional responses. Participants described feeling 'looked after' rather than 'monitored.'",
  },
  {
    theme: "Data Interpretation",
    insight:
      "Stone composition and risk probability displays needed simplification. Participants preferred directional language ('improving', 'stable') over numerical values.",
  },
  {
    theme: "Clinical Trust",
    insight:
      "Trust increased when the interface clearly distinguished between AI-generated suggestions and clinician-verified information. Ambiguity eroded confidence.",
  },
];

export default function SenseTesting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
        Testing &amp; Feedback
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
            Moderated Usability Sessions
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-6 text-justify">
            Four moderated sessions were conducted across four iterative
            rounds, using think-aloud protocol with the Figma prototype.
            Participants completed core task flows: checking stone status,
            interpreting AI risk assessments, adjusting notification
            preferences, and generating clinical reports.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
            Each round informed specific interface refinements, producing
            measurable improvements in task completion rate, time-on-task,
            and subjective satisfaction scores.
          </p>

          <div className="bg-secondary/50 p-6">
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3">
              Results Summary
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Mean usability score
                </span>
                <span className="text-lg font-bold tracking-tight">
                  6.14 / 7
                </span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Hypothesis validation rate
                </span>
                <span className="text-lg font-bold tracking-tight">
                  74%
                </span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Task completion improvement
                </span>
                <span className="text-lg font-bold tracking-tight">
                  Round 1 → 4
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
            Key Feedback Themes
          </h3>

          <div className="space-y-0 border-t border-border">
            {feedbackThemes.map(
              (
                item: { theme: string; insight: string },
                i: number
              ) => (
                <motion.div
                  key={item.theme}
                  initial={{ opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + 0.1 * i }}
                  className="py-6 border-b border-border"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-medium tracking-wider text-muted-foreground/40 mt-1 flex-shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold tracking-tight mb-2">
                        {item.theme}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                        {item.insight}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
