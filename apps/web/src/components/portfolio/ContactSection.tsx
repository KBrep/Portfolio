"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding px-6 sm:px-8 lg:px-12" data-tour="contact-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-normal tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Contact
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="heading-lg mb-6">
                Let&apos;s build something
                <br />
                that matters.
              </h2>
              <p className="body-md max-w-lg">
                Open to strategic collaborations, consulting engagements,
                and projects where design thinking meets business impact.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
              <a
                href="mailto:karthik.dwaj@gmail.com"
                className="group flex items-center justify-between py-4 border-b border-border/60 hover:pl-2 transition-all duration-500"
              >
                <div>
                  <p className="text-[0.6rem] text-muted-foreground tracking-[0.2em] uppercase mb-1">Email</p>
                  <p className="text-sm font-medium">karthik.dwaj@gmail.com</p>
                </div>
                <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/karthik--bharadwaj/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-border/60 hover:pl-2 transition-all duration-500"
              >
                <div>
                  <p className="text-[0.6rem] text-muted-foreground tracking-[0.2em] uppercase mb-1">LinkedIn</p>
                  <p className="text-sm font-medium">karthik--bharadwaj</p>
                </div>
                <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
