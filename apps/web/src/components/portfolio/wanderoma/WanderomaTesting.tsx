"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const feedbackThemes = [
  {
    theme: "Cultural Authenticity",
    insight:
      "Participants responded strongly to features that centred local voices. The 'Locals Love It' concept was seen as a meaningful departure from algorithm-driven recommendations, though questions arose about how to ensure genuine community representation.",
  },
  {
    theme: "Emotional Engagement",
    insight:
      "The storytelling layer consistently generated enthusiasm. Participants described wanting to 'feel like they belonged somewhere' rather than simply visiting, validating the emotional framing of the design.",
  },
  {
    theme: "Speculative Tension",
    insight:
      "Some features felt aspirational in a productive way, while others raised practical questions about implementation. The Reflection Journal, for instance, was praised conceptually but participants wondered whether they would use it in practice.",
  },
  {
    theme: "Navigation & Structure",
    insight:
      "The Dynamic Journey Builder was intuitive for most participants, though the layered cultural content occasionally competed with wayfinding. Clearer hierarchy between navigation and narrative was identified as a priority.",
  },
  {
    theme: "Participatory Value",
    insight:
      "Learn-by-Practice Quests were the most discussed feature across both rounds. Participants valued the shift from passive tourism to active cultural participation, describing it as 'the thing that makes this different.'",
  },
];

export default function WanderomaTesting() {
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
            Round 1: Guerrilla Testing
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-6 text-justify">
            The first round used guerrilla testing methods with four
            participants, gathering quick, directional feedback on early
            wireframes. Sessions were informal and conversational, focused on
            first impressions, emotional responses, and whether the cultural
            storytelling concept resonated before investing in higher fidelity.
          </p>

          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
            Round 2: 5-Act Interviews
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
            The second round involved five participants in structured 5-act
            interview sessions with the interactive prototype. Each session
            moved through introduction, context setting, task walkthrough,
            debrief, and reflection, allowing deeper exploration of how
            participants imagined using Wanderoma in real travel contexts.
          </p>

          <div className="bg-secondary/50 p-6">
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3">
              Testing Overview
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Testing rounds
                </span>
                <span className="text-lg font-bold tracking-tight">2</span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Total participants
                </span>
                <span className="text-lg font-bold tracking-tight">9</span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Methods used
                </span>
                <span className="text-lg font-bold tracking-tight">
                  Guerrilla + 5-Act
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
