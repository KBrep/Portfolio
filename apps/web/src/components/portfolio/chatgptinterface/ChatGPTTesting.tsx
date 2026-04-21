"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const feedbackThemes = [
  {
    theme: "Thread Clarity",
    insight:
      "Colour-coded prompt threads were immediately intuitive. Reviewers noted that visual ownership reduced cognitive load when tracking parallel conversations, though they questioned scalability beyond five simultaneous users.",
  },
  {
    theme: "Emotional Calibration",
    insight:
      "The emotion-aware response module generated strong interest but also caution. Reviewers valued the concept of adaptive tone but flagged the risk of misinterpretation, particularly in cross-cultural contexts where emotional expression varies significantly.",
  },
  {
    theme: "Facilitation Balance",
    insight:
      "The AI facilitation mode was seen as the most innovative feature, but peer reviewers debated the appropriate level of AI intervention. Too active, and it risks overriding human agency; too passive, and the shared space loses its collaborative advantage.",
  },
  {
    theme: "Multilingual Nuance",
    insight:
      "Real-time translation was recognised as technically ambitious and socially valuable. Feedback emphasised that preserving idiomatic expression and cultural tone should take priority over literal accuracy, an area needing further research.",
  },
];

export default function ChatGPTTesting() {
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
            Heuristic Walkthrough
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-6 text-justify">
            A structured heuristic evaluation was conducted against
            Nielsen&rsquo;s usability principles, supplemented with criteria
            specific to collaborative and multi-user interfaces. The
            walkthrough assessed information architecture, visual hierarchy
            across parallel threads, error prevention in simultaneous
            prompting, and the clarity of AI-generated facilitation cues.
          </p>

          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
            Peer Review Sessions
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
            Two dedicated peer review sessions brought together design
            practitioners and interaction design students to evaluate the
            prototype. Sessions focused on the feasibility of the multi-user
            model, the ethical implications of emotion-aware AI, and the
            practical challenges of scaling the interface for diverse group
            dynamics.
          </p>

          <div className="bg-secondary/50 p-6">
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3">
              Evaluation Summary
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Heuristic evaluation
                </span>
                <span className="text-lg font-bold tracking-tight">
                  Structured
                </span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Peer review sessions
                </span>
                <span className="text-lg font-bold tracking-tight">2</span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Feedback themes identified
                </span>
                <span className="text-lg font-bold tracking-tight">4</span>
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
