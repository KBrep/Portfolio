import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import CapabilitiesSection from "@/components/portfolio/CapabilitiesSection";
import WorkSection from "@/components/portfolio/WorkSection";
import PhilosophySection from "@/components/portfolio/PhilosophySection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import TourProvider from "@/components/tour/TourProvider";

export default function HomePage() {
  return (
    <TourProvider
      screenId="homepage"
      steps={[
        {
          target: "[data-tour='navigation']",
          title: "Navigation",
          content: "Use the navigation bar to jump between sections. It stays fixed as you scroll.",
        },
        {
          target: "[data-tour='hero-title']",
          title: "Hero Statement",
          content: "The positioning statement communicates the strategic, multidisciplinary focus of this portfolio.",
        },
        {
          target: "[data-tour='about-section']",
          title: "About",
          content: "This section outlines professional background, expertise, and educational credentials.",
        },
        {
          target: "[data-tour='capabilities-section']",
          title: "Capabilities",
          content: "Each capability is presented as a formula-style expression representing the strategic approach.",
        },
        {
          target: "[data-tour='work-section']",
          title: "Selected Work",
          content: "Click any category to view the full case study with problem, approach, and outcomes.",
        },
        {
          target: "[data-tour='contact-section']",
          title: "Contact",
          content: "Reach out via email or LinkedIn for collaborations and consulting engagements.",
        },
      ]}
    >
      <main className="relative">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <CapabilitiesSection />
        <WorkSection />
        <PhilosophySection />
        <ContactSection />
        <Footer />
      </main>
    </TourProvider>
  );
}
