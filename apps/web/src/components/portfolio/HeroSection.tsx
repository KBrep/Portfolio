"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Background Image — positioned to the right side of the hero */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/kb-portrait.jpg"
          alt="KB — UX Researcher and Storyteller"
          fill
          className="object-cover object-[95%_center] grayscale contrast-[1.1] brightness-[0.55]"
          sizes="100vw"
          priority
        />
        {/* Primary gradient — strong left-to-right fade: solid background on left, image visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 via-[45%] to-transparent" />
        {/* Secondary overlay — top-to-bottom wash for uniform depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/40" />
        {/* Radial vignette — draws focus inward, editorial feel */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 120% at 85% 50%, transparent 30%, hsl(var(--background) / 0.8) 100%)",
          }}
        />
        {/* Bottom fade — seamless transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        {/* Mobile full-overlay boost — ensures legibility on small screens */}
        <div className="absolute inset-0 bg-background/40 sm:bg-transparent" />
      </motion.div>

      {/* Content — positioned over the background on the left */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto pt-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs sm:text-sm font-normal tracking-[0.3em] uppercase text-black/50 mb-6">
              Digital Strategist &nbsp;|&nbsp; UX Researcher &nbsp;|&nbsp; Storyteller
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            data-tour="hero-title"
          >
            <blockquote className="heading-xl leading-[1.1]">
              <span className="text-black">&ldquo;Great storytelling</span>
              <br />
              <span className="text-black">moves people,</span>
              <br />
              <span className="text-black/40">in business and finance</span>
              <br />
              <span className="text-black/40">it </span><span className="text-black">persuades,</span>
              <br />
              <span className="text-black/40">and in politics it </span><span className="text-black">inspires,</span>
              <br />
              <span className="text-black/40">in life it </span><span className="text-black">connects us.&rdquo;</span>
            </blockquote>
            <p className="mt-5 text-xs font-normal tracking-[0.3em] uppercase text-black/40">
              &mdash; KB
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <a
              href="#work"
              className="text-xs font-normal tracking-[0.22em] uppercase text-black border-b border-black/30 pb-1.5 hover:border-black hover:opacity-70 transition-all duration-500"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="text-xs font-normal tracking-[0.22em] uppercase text-black/50 hover:text-black transition-colors duration-500"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
