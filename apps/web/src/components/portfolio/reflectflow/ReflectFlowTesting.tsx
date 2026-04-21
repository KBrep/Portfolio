"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const feedbackThemes = [
  {
    theme: "Emotional Resonance",
    insight:
      "Participants consistently described the reflective cues as emotionally intelligent rather than restrictive. The design language of fluid transitions and colour gradients was perceived as calming, creating what participants called a sense of being cared for by the interface.",
  },
  {
    theme: "Awareness Without Obstruction",
    insight:
      "The most positively received cues were those that surfaced awareness without blocking the action. Participants valued the distinction between being stopped and being invited to pause, noting that the latter felt respectful of their autonomy.",
  },
  {
    theme: "Contextual Sensitivity",
    insight:
      "Feedback revealed that the same cue could feel appropriate in one context and intrusive in another. E-commerce flows tolerated slightly more visible interventions, while social media scrolling demanded subtler, more ambient signals.",
  },
  {
    theme: "Metaphorical Clarity",
    insight:
      "The ripple animation and gradient shifts were the most discussed design elements. Participants intuitively understood the metaphor of impact radiating outward and described the gradients as visual representations of their own emotional state.",
  },
  {
    theme: "Behavioural Self-Recognition",
    insight:
      "Several participants described moments of genuine self-recognition during testing, noting that the cues made them aware of patterns they had not previously noticed in their own digital behaviour.",
  },
];

export default function ReflectFlowTesting() {
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
            Moderated Usability Testing
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-6 text-justify">
            Five moderated usability testing sessions were conducted with
            digitally active participants aged 18 to 35. Each session was
            structured to explore both the functional usability of the
            prototype and the emotional response to the reflective cues
            embedded throughout the e-commerce and social media flows.
          </p>

          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
            Participant Voices
          </h3>
          <div className="space-y-4 mb-8">
            <div className="bg-secondary/50 p-5">
              <p className="text-sm leading-relaxed italic text-foreground/80 text-justify">
                &ldquo;Small reminders to slow down.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Participant feedback on reflective pause cues
              </p>
            </div>
            <div className="bg-secondary/50 p-5">
              <p className="text-sm leading-relaxed italic text-foreground/80 text-justify">
                &ldquo;Signals that made me question why I was rushing.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Participant feedback on emotional awareness triggers
              </p>
            </div>
          </div>

          <div className="bg-secondary/50 p-6">
            <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3">
              Testing Overview
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Testing sessions
                </span>
                <span className="text-lg font-bold tracking-tight">5</span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  User group
                </span>
                <span className="text-sm font-bold tracking-tight">
                  Ages 18-35
                </span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Contexts tested
                </span>
                <span className="text-sm font-bold tracking-tight">
                  E-commerce + Social Media
                </span>
              </div>
              <div className="border-t border-border" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">
                  Method
                </span>
                <span className="text-sm font-bold tracking-tight">
                  Moderated Usability
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
