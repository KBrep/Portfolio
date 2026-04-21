"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const theoreticalFrameworks = [
  {
    title: "Embodied Cognition",
    description:
      "The theory that cognition is shaped by the body and its sensory-motor interactions with the environment. Understanding is not purely cerebral but emerges through physical engagement with the world.",
  },
  {
    title: "Constructivist Learning",
    description:
      "Learning as an active process of meaning-making, where learners build understanding through experience rather than passive reception of information. Knowledge is constructed, not transmitted.",
  },
  {
    title: "Tangible Interaction Design",
    description:
      "Design frameworks that bridge digital information with physical manipulation, creating interfaces where abstract data becomes something you can touch, twist, and reposition.",
  },
];

export default function KnotItDownResearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const inspirationRef = useRef(null);
  const inspirationInView = useInView(inspirationRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <>
      {/* Theoretical Grounding */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
          Research &amp; Theoretical Grounding
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Embodied Learning Theory
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              The research began with a foundational question: what if learning
              history was not about reading events on a timeline but about
              feeling the weight, tension, and texture of time itself? Embodied
              cognition research suggests that understanding deepens when the
              body is involved in the process of knowing. Abstract concepts
              become tangible when they can be held, manipulated, and physically
              navigated.
            </p>

            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Meta-cognitive Awareness
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground text-justify">
              The project explored how tactile interaction with historical data
              might foster meta-cognitive awareness, encouraging learners to
              reflect not just on what happened in history but on how they
              construct their own understanding of sequence, causation, and
              significance. The act of knotting becomes an act of thinking about
              thinking.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Theoretical Foundations
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8 text-justify">
              Three intersecting theoretical domains shaped the conceptual
              framework. Each provided a different lens through which to
              reimagine the relationship between learner, body, and historical
              knowledge.
            </p>

            <div className="space-y-0 border-t border-border">
              {theoreticalFrameworks.map(
                (
                  framework: { title: string; description: string },
                  i: number
                ) => (
                  <motion.div
                    key={framework.title}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + 0.08 * i }}
                    className="py-6 border-b border-border"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-medium tracking-wider text-muted-foreground/40 mt-1 flex-shrink-0 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-semibold tracking-tight mb-2">
                          {framework.title}
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                          {framework.description}
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

      {/* Inca Khipu Inspiration */}
      <div className="my-16 sm:my-24 border-t border-border" />

      <motion.section
        ref={inspirationRef}
        initial={{ opacity: 0, y: 20 }}
        animate={inspirationInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10">
          Design Inspiration
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <h3 className="heading-md mb-6">The Inca Khipu</h3>
            <p className="text-lg sm:text-xl leading-relaxed mb-6 text-justify">
              The Inca Khipu, a system of knotted cords used for recording
              information across the Inca Empire, became the conceptual anchor
              for this project. The Khipu encoded complex data through the
              position, colour, and type of knots tied along strings, a
              sophisticated information system that was simultaneously tactile,
              portable, and deeply embodied.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground text-justify">
              The Khipu challenged the Western assumption that meaningful record
              keeping requires written language. It demonstrated that information
              can live in material, in the tension of a cord, in the sequence of
              knots. This project asked: what if we applied that same logic to
              history education? What if events were not dates on a page but
              knots on a string, each carrying its own weight and texture?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border mt-12">
          {[
            {
              title: "Material Encoding",
              description:
                "Information stored in physical properties: knot type, cord colour, position along the string. Data is felt, not read.",
            },
            {
              title: "Non-linear Narrative",
              description:
                "Khipu strings branch and connect, creating relational networks rather than linear sequences. History as web, not line.",
            },
            {
              title: "Embodied Record",
              description:
                "The act of creating a Khipu was itself a cognitive process. Tying a knot required understanding the data it encoded.",
            },
          ].map(
            (
              item: { title: string; description: string },
              i: number
            ) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={inspirationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                className="bg-background p-6 sm:p-8"
              >
                <p className="text-sm font-semibold tracking-tight mb-3">
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                  {item.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </motion.section>
    </>
  );
}
