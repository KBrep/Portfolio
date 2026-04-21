"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const qualitativeInsights = [
  {
    theme: "Conceptual Resonance",
    insight:
      "The knot-as-event metaphor was immediately intuitive for those who encountered it. The idea that physical properties could encode historical significance felt both novel and strangely familiar, as though it activated an understanding that text-based timelines had suppressed.",
  },
  {
    theme: "Embodied Engagement",
    insight:
      "Early conceptual walkthroughs suggested that the tactile dimension would fundamentally change the quality of attention learners bring to historical material. Physical manipulation demands a different kind of focus than reading or watching.",
  },
  {
    theme: "Speculative Limitation",
    insight:
      "Without a functional prototype to test, feedback remained at the conceptual level. Whether the experience would genuinely improve learning outcomes is an open question that requires future implementation and rigorous evaluation.",
  },
  {
    theme: "Scalability Questions",
    insight:
      "The approach works well for focused historical case studies but raises questions about scalability. How would the system handle the complexity of world history, or allow learners to compare parallel timelines across different civilisations?",
  },
];

export default function KnotItDownTesting() {
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
            Qualitative Exploration Only
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-6 text-justify">
            This project did not include formal user testing. As a speculative
            design exercise, the focus was on conceptual rigour and
            theoretical grounding rather than empirical validation. The project
            exists as a provocation: a carefully reasoned argument for what
            embodied history education could become, rather than a measured
            evaluation of what it currently does.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
            Feedback was gathered informally through peer critique sessions,
            tutor reviews, and conceptual walkthroughs with fellow students on
            the Master's programme. These conversations shaped the evolution of
            the design but do not constitute formal usability data.
          </p>

          <div className="bg-secondary/50 p-6">
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3">
              Testing Status
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Formal user testing
                </span>
                <span className="text-lg font-bold tracking-tight">
                  None
                </span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Working prototype
                </span>
                <span className="text-lg font-bold tracking-tight">
                  None
                </span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Peer critique sessions
                </span>
                <span className="text-lg font-bold tracking-tight">
                  Qualitative
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
            Qualitative Insights
          </h3>

          <div className="space-y-0 border-t border-border">
            {qualitativeInsights.map(
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
