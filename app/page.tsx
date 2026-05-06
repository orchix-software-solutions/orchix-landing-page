import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PageLoadHandler from "@/components/page-load-handler";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import ScrollReveal from "@/components/scroll-reveal";
import EngagementDialog from "@/components/engagement-dialog";
import FounderSection from "@/components/founder-section";
import PricingSection from "@/components/pricing-section";
import GlobalReachSection from "@/components/global-reach-section";
import BlogsSection from "@/components/blogs-section";

export default function Home() {
  return (
    <>
      <SmoothScrollProvider />
      <PageLoadHandler />
      <main>
        <HeroSection />
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        <GlobalReachSection />
        {/* <ScrollReveal delay={1}>
          <FounderSection />
        </ScrollReveal> */}
        <ScrollReveal delay={1}>
          <PricingSection />
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <BlogsSection />
        </ScrollReveal>
      </main>
      <EngagementDialog />
    </>
  );
}
