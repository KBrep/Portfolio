"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const researchStrands = [
  {
    area: "Biosignal interpretation",
    count: "3",
    detail: "EEG patterns, galvanic skin response, vocal stress analysis",
  },
  {
    area: "VR social interaction",
    count: "2",
    detail: "Avatar trust dynamics, non-verbal cue simulation",
  },
  {
    area: "Deception detection research",
    count: "2",
    detail: "Polygraph critique, micro-expression theory",
  },
  {
    area: "Design fiction & ethics",
    count: "3",
    detail: "Speculative design methods, surveillance critique, consent frameworks",
  },
];

export default function DeceptionResearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const designRef = useRef(null);
  const designInView = useInView(designRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Research Methods */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
          Research Methods
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Literature Synthesis
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              A cross-disciplinary review spanning neuroscience, affective
              computing, VR interaction design, and surveillance studies.
              The synthesis mapped the current state of biosignal-based
              deception detection, its accuracy limitations, and the ethical
              debates surrounding physiological monitoring in social
              contexts. Particular attention was given to the gap between
              laboratory deception research and the messy reality of
              human communication.
            </p>

            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Design Fiction
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground text-justify">
              Speculative scenarios were developed to explore what a
              VR environment with embedded truthfulness feedback might
              feel like in practice. These narratives placed users in
              high-stakes social situations: a job interview conducted
              through avatars, a mediation session between estranged
              parties. The fictions surfaced ethical tensions that
              technical analysis alone could not reveal.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Research Strands
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              Research was organised across four intersecting strands, each
              interrogating a different dimension of the challenge: from the
              raw science of biosignal capture to the philosophical
              implications of making invisible mental states visible.
            </p>

            <div className="space-y-0 border-t border-border">
              {researchStrands.map(
                (
                  strand: { area: string; count: string; detail: string },
                  i: number
                ) => (
                  <motion.div
                    key={strand.area}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + 0.08 * i }}
                    className="flex items-baseline justify-between py-4 border-b border-border"
                  >
                    <div>
                      <p className="text-sm font-medium">{strand.area}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {strand.detail}
                      </p>
                    </div>
                    <span className="text-2xl font-bold tracking-tight ml-4">
                      {strand.count}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Design Methods */}
      <div className="my-16 sm:my-24 border-t border-border" />

      <motion.section
        ref={designRef}
        initial={{ opacity: 0, y: 20 }}
        animate={designInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
          Design Methods
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {[
            {
              title: "Literature Synthesis",
              description:
                "Cross-disciplinary review of neuroscience, VR interaction, and surveillance studies to map the feasibility and ethics of biosignal-based truthfulness feedback in social virtual environments.",
            },
            {
              title: "Design Fiction",
              description:
                "Narrative-driven speculative scenarios placing users in VR contexts where truthfulness data is ambient, exploring the felt experience of living with real-time sincerity indicators.",
            },
            {
              title: "Concept Sketching",
              description:
                "Rapid visual exploration of feedback forms: halos, opacity shifts, numeric overlays, and colour gradients, testing how different visual languages communicate ambiguity versus certainty.",
            },
            {
              title: "Ethical Scenario Mapping",
              description:
                "Structured analysis of four core ethical tensions: consent, power asymmetry, false positives, and the weaponisation of biosignal data in adversarial social contexts.",
            },
            {
              title: "Feedback Form Exploration",
              description:
                "Iterative development of three distinct feedback modalities: the honesty meter, the visual halo, and the opacity modulation system, each encoding truthfulness data differently.",
            },
            {
              title: "Critical Reflection",
              description:
                "Reflexive analysis of the project's own assumptions, interrogating whether designing deception-detection tools is a responsible act regardless of the interface's elegance.",
            },
          ].map(
            (
              method: { title: string; description: string },
              i: number
            ) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 12 }}
                animate={designInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                className="bg-background p-6 sm:p-8"
              >
                <p className="text-sm font-semibold tracking-tight mb-3">
                  {method.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                  {method.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </motion.section>
    </>
  );
}
