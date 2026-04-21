"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const researchStrands = [
  {
    area: "Multi-user AI interaction",
    count: "4",
    detail: "CSCW frameworks, shared AI workspaces",
  },
  {
    area: "Emotion-aware computing",
    count: "3",
    detail: "Affective computing, sentiment-responsive UI",
  },
  {
    area: "Conversational UX patterns",
    count: "3",
    detail: "Turn-taking, threading, multilingual chat",
  },
  {
    area: "Collaborative technology trends",
    count: "2",
    detail: "Real-time co-creation tools, shared AI agents",
  },
];

export default function ChatGPTResearch() {
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
              Literature Review
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              A focused review of 12 sources spanning computer-supported
              cooperative work (CSCW), affective computing, conversational AI
              design, and multilingual interaction patterns. The review
              mapped where existing research addressed single-user AI
              paradigms and identified the largely unexplored territory of
              shared, simultaneous AI interaction across diverse user groups.
            </p>

            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              System Mapping
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground text-justify">
              Existing conversational AI platforms were deconstructed to
              understand their architectural assumptions: single-thread
              dialogue, individual context windows, and linear prompt-response
              flows. This mapping exposed the structural barriers to
              multi-user collaboration and informed the design of parallel
              interaction channels.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Research Strands
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              Research was organised across four intersecting strands, each
              contributing a distinct lens to the design challenge of
              reimagining AI as a shared conversational space rather than a
              private tool.
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
              title: "Trend Analysis",
              description:
                "Surveyed the trajectory of collaborative AI tools, real-time co-editing platforms, and emotionally responsive interfaces to ground the speculative design in plausible near-future capabilities.",
            },
            {
              title: "Scenario Modelling",
              description:
                "Developed three core user scenarios: a multilingual family group, a collaborative design team, and a conflict mediation session, each stress-testing different aspects of multi-user AI interaction.",
            },
            {
              title: "Interaction Flow Mapping",
              description:
                "Charted parallel conversation flows, mapping how multiple users might simultaneously prompt, respond to, and build upon AI-generated content within a shared interface.",
            },
            {
              title: "Wireframing & Iteration",
              description:
                "Progressed through four rounds of wireframing, evolving from basic multi-thread layouts to a refined system of colour-coded prompt ownership, emotional tone indicators, and adaptive response modules.",
            },
            {
              title: "Speculative Prototyping",
              description:
                "Built an interactive Figma prototype demonstrating the multi-user experience, including prompt threading, emotion-aware responses, and real-time facilitation features.",
            },
            {
              title: "Heuristic Walkthrough",
              description:
                "Conducted structured heuristic evaluations against established usability principles and collaborative interface criteria to identify friction points before peer review.",
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
