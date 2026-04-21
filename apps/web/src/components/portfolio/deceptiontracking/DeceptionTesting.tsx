"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const feedbackThemes = [
  {
    theme: "Feedback Legibility",
    insight:
      "The visual halo system was the most intuitively understood feedback form. Observers noted that ambient, peripheral indicators felt less invasive than direct numeric scores, suggesting that the modality of feedback fundamentally shapes the ethical weight of the information it carries.",
  },
  {
    theme: "Ethical Discomfort",
    insight:
      "The numeric sincerity score provoked the strongest reactions. Reviewers described it as simultaneously compelling and disturbing, recognising its precision as a design strength and its reductive logic as a moral hazard. Several noted they would not want such a score applied to themselves.",
  },
  {
    theme: "Ambiguity as Design Value",
    insight:
      "Opacity modulation was praised for encoding uncertainty into the feedback itself. Rather than claiming to know whether someone is lying, the translucent avatar communicates that something is unresolved, an approach that reviewers felt respected the complexity of human internal states.",
  },
  {
    theme: "Power Asymmetry",
    insight:
      "Reviewers consistently flagged the question of who controls the feedback. A system where only one party sees truthfulness data creates an inherent power imbalance. Symmetrical visibility was seen as more ethical but also more socially destabilising, as both parties would know the other is being monitored.",
  },
];

export default function DeceptionTesting() {
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
            Informal Critique Sessions
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-6 text-justify">
            This project did not undergo formal usability testing. Instead,
            the concepts were evaluated through informal critique sessions
            with peers and faculty, where the focus was less on interface
            usability and more on the ethical and conceptual coherence of
            the design proposals. These sessions functioned as structured
            provocations, testing whether the designs successfully raised
            the right questions rather than whether they provided the
            right answers.
          </p>

          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
            Critical Discussion
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
            Discussion centred on the tension between technological
            capability and social responsibility. Reviewers engaged deeply
            with the question of whether designing truthfulness feedback
            systems, even speculatively, normalises a surveillance logic
            that should be resisted. The project was valued precisely
            because it made this tension visible rather than resolving it.
          </p>

          <div className="bg-secondary/50 p-6">
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3">
              Evaluation Summary
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Formal usability testing
                </span>
                <span className="text-lg font-bold tracking-tight">
                  None
                </span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Informal critique sessions
                </span>
                <span className="text-lg font-bold tracking-tight">3</span>
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
